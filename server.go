package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"
)

type Welcome struct {
	Name string
	Time string
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		welcome := Welcome{"Amogus", time.Now().Format(time.Stamp)}
		templates := template.Must(template.ParseFiles("templates/hello.html"))

		if name := r.FormValue("name"); name != "" {
			welcome.Name = name
		}

		if err := templates.ExecuteTemplate(w, "hello.html", welcome); err !=nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})
	fmt.Println(http.ListenAndServe(":8080", nil))
}
