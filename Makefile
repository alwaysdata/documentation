HUGO_VERSION := 0.145.0
THEME_RELEARN_VERSION := 7.5.0

.ONESHELL:
.PHONY: public

public: hugo themes/relearn
	./hugo --minify --cleanDestinationDir

# The theme we use.
themes/relearn:
	mkdir -p themes/relearn 2>/dev/null
	wget -O- https://github.com/McShelby/hugo-theme-relearn/archive/refs/tags/$(THEME_RELEARN_VERSION).tar.gz | tar -xz -C themes/relearn --strip-components=1

# Hugo, the site generator.
hugo:
	wget -O- https://github.com/gohugoio/hugo/releases/download/v$(HUGO_VERSION)/hugo_$(HUGO_VERSION)_Linux-64bit.tar.gz | tar -xz hugo
