HUGO_VERSION := 0.78.1
THEME_LEARN_REVISION := 6cfd61e0f675b45ba85f8325e206d23a4337a14c

.ONESHELL:
.PHONY: public

public: hugo themes/learn
	./hugo --minify --cleanDestinationDir

# The theme we use.
themes/learn:
	mkdir themes 2>/dev/null
	git -C themes clone https://github.com/matcornic/hugo-theme-learn.git learn
	cd themes/learn
	git reset --hard $(THEME_LEARN_REVISION)

# Hugo, the site generator.
hugo:
	wget -O- https://github.com/gohugoio/hugo/releases/download/v$(HUGO_VERSION)/hugo_$(HUGO_VERSION)_Linux-64bit.tar.gz | tar -xz hugo
