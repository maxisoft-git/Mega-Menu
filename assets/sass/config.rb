# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "../css"
sass_dir = "/"
images_dir = "../imgs"
javascripts_dir = "../js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

require 'fileutils'

on_stylesheet_saved do |filename|
	filedir = File.dirname(filename)
	`compass compile #{filedir} -c #{filedir}/config_prod.rb --force`
end