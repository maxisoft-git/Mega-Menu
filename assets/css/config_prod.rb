http_path = "/"
css_dir = "/prod"
sass_dir = "../sass"
images_dir = "../imgs"
javascripts_dir = "../js"

relative_assets = true

line_comments = false
output_style = :compressed
sass_options = {:debug_info => false}

require 'fileutils'

on_stylesheet_saved do |file|
    if File.exist?(file)
    	filename = File.basename(file, File.extname(file))
        File.rename(file, File.dirname(file) + "/" + filename + ".min" + File.extname(file))
    end
end