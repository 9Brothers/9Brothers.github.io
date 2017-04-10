/// <reference path="../../typings/index.d.ts" />

abstract class Maps {
  private static map: google.maps.Map;
  private static args: IMapArguments;
  private static mapSelector: string = 'nb-map';  

  public static Run(args: IMapArguments) {
    this.args = args;

    this.Render();
  }

  public static Init() {
    this.RenderMap();
    this.AddMarkers(this.args.dataSource);
  }

  private static Render() {
    let template: string = `
      <div id="${this.mapSelector}" style='width: 100%;height: 100%'></div>      
    `;
    $(this.args.selector).append(template);

    template = `
      <script src="https://maps.googleapis.com/maps/api/js?key=${this.args.key}&callback=Maps.Init" async defer></script>
    `;
    $('body').append(template);
  }

  private static RenderMap() {
    this.map = new google.maps.Map(document.getElementById(this.mapSelector), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }

  private static AddMark(mark: IMarker) {
    this.map.setCenter(mark.latlng);

    let marker = new google.maps.Marker({
      position: mark.latlng,
      map: this.map,
      title: mark.title,
      icon: mark.icon
    })
  }

  private static AddMarkers(markers: IMarker[]) {
    for (let m of markers) {
      this.AddMark(m)
    }
  }

  public static GetPositions() {
    let result: IMarker[] = [];

    $.ajax({
      url: './release/datasource/markers.json',
      headers: { "Accept": "application/json" },
      method: "GET",
      async: false,
      success: (response) => {
        result = response.positions;
      },
      error: (error) => {
        console.log(error);
      }
    });

    return new Promise<IMarker[]>((resolve) => {
      resolve(result)
    });
  }

  public static async GetPositionsAsync() {
    let pos:IMarker[] = await this.GetPositions();
    
    this.args.dataSource = pos;
  }
}


