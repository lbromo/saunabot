package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Println(r.URL.Path[1:])
    fmt.Fprintf(w, "SAUNABOT 2.0.1: %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":21102", nil)
}