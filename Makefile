STAGING_URL=https://passhugo.stage.ccnmtl.columbia.edu/
PROD_URL=https://pass.ctl.columbia.edu/
STAGING_BUCKET=passhugo.stage.ccnmtl.columbia.edu
PROD_BUCKET=pass.ctl.columbia.edu
INTERMEDIATE_STEPS ?= echo nothing
HUGO=/usr/local/bin/hugo-0.18

JS_FILES=themes/ctl-book/static/js/

all: webpack eslint

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py
