WEBPACK_UTIL=./node_modules/webpack/bin/webpack.js
OUTPUT_PATH=static/lib/

webpack:
	rm -rf static/lib/*
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)supportservices/ --config ./node_modules/supportservices-pack/webpack.config.js
	$(WEBPACK_UTIL) --output-path $(OUTPUT_PATH)specialneedsvisit/ --config ./node_modules/specialneedsvisit-pack/webpack.config.js
