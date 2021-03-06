WEBPACK_UTIL=./node_modules/webpack/bin/webpack.js
OUTPUT_PATH=static/lib/

webpack:  $(JS_SENTINAL)
	rm -rf static/lib/*
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)supportservices/ --config ./node_modules/supportservices-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)specialneedsvisit/ --config ./node_modules/specialneedsvisit-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)dentaloffice/ --config ./node_modules/dentalofficelocation-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)ruralhealth/ --config ./node_modules/dentalruralhealth-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)careerplan/ --config ./node_modules/dentalcareerplan-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)elderdresser/ --config ./node_modules/elderissuesdresser-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)elderfridge/ --config ./node_modules/elderissuesrefrigerator-pack/webpack.config.js
