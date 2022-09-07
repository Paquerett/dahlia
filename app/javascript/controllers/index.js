// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import FormController from "./form_controller"
application.register("form", FormController)


import SeeAllController from "./see_all_controller"
application.register("see-all", SeeAllController)

import SearchPatientsController from "./search_patients_controller"
application.register("search-patients", SearchPatientsController)


import StarController from "./star_controller"
application.register("star", StarController)
