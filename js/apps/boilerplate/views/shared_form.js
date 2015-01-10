define(["app", "text!apps/boilerplate/templates/shared_form.html"], function(App, Template) {

	App.module("BoilerplateApp.Views", function(Views, App, Backbone, Marionette, $, _) {

		Views.SharedFormView = Marionette.ItemView.extend({

			title: "Undefined Title",

			template: _.template(Template),

			events: {
				"submit form": "submitClicked"
			},

			submitClicked: function(evt) {
				evt.preventDefault();
				var data = Backbone.Syphon.serialize(this);
				this.trigger("form:submit", data);
			},

			onFormDataInvalid: function(errors){
				var $view = this.$el;

				(function() {
					var $form = $view.find("form");
					$form.find(".error").each(function(){
						$(this).remove();
					});
					$form.find(".input.error").each(function(){
						$(this).removeClass("error");
					});
				})();

				var markErrors = function(value, key) {
					var $controlGroup = $view.find("#boilerplate-" + key).parent();
					var $errorEl = $("<span>", { class: "error", text: value });
					$controlGroup.append($errorEl).addClass("error");
				};

				_.each(errors, markErrors);
			},

			onRender: function() {
				var titleElement = $("<h1>", {text: this.title});
				this.$el.prepend(titleElement);
			}
		});

	});

});
