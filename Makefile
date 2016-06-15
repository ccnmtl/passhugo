STAGING_URL=https://passhugo.stage.ccnmtl.columbia.edu/
PROD_URL=https://pass.ctl.columbia.edu/
STAGING_BUCKET=passhugo.stage.ccnmtl.columbia.edu
PROD_BUCKET=pass.ctl.columbia.edu
INTERMEDIATE_STEPS ?= echo nothing

JS_FILES=static/js/src

all: jshint jscs install-modules

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py

runserver-zarina:
	hugo --buildDrafts --verboseLog=true -v
	hugo server --baseUrl=http://kodos.ccnmtl.columbia.edu/ --bind=0.0.0.0 --port=13093 --watch --buildDrafts --verboseLog=true -v

install-modules:
	ln -sf ../../node_modules/supportservices-pack static/lib/supportservices-pack
	ln -sf ../../node_modules/specialneedsvisit-pack static/lib/specialneedsvisit-pack