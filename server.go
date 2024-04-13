package main

import (
	"html/template"
	"net/http"
)

func main() {
	// Create a file server handler for serving static files (CSS, JavaScript, images, etc.)
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Parse your HTML template file
		templates := template.Must(template.ParseFiles("templates/index.html"))
		// Execute the template
		templates.Execute(w, nil)
	})

	// Start the HTTP server
	http.ListenAndServe(":3000", nil)
}
