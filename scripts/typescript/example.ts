import { Is } from "./is";
import $ from "jquery";

$("#true").text(`Validação: ${Is.Date(new Date())}`)
$("#false").text(`Validação: ${Is.Date("hello")}`)