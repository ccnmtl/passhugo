STAGING_URL=https://passhugo.stage.ccnmtl.columbia.edu/
PROD_URL=https://pass.ctl.columbia.edu/
STAGING_BUCKET=passhugo.stage.ccnmtl.columbia.edu
PROD_BUCKET=pass.ctl.columbia.edu
INTERMEDIATE_STEPS ?= echo nothing

JS_FILES=themes/ctl-book/static/js/


all: webpack jshint jscs

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py

runserver-zarina:
	hugo --buildDrafts --verboseLog=true -v
	hugo server --baseUrl=http://kodos.ccnmtl.columbia.edu/ --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v
