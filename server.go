package main

import (
	"html/template"

	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		templates := template.Must(template.ParseFiles("templates/hello.html"))
		templates.Execute(w, nil)

	})
	http.ListenAndServe(":8080", nil)
}
