package main

import (
    "fmt"
    "net/http"
    "encoding/json"
)

const telegram_endpoint string = "https://api.telegram.org/bot"
const telegram_token string = "121725983:AAGJCGKpU6ni2zqLzMjlVjF2w-p5z7Q3a6U"

type response_t struct {
    Update_id int
    Message string
}

func handler(w http.ResponseWriter, req *http.Request) {
    /*decoder := json.NewDecoder(req.Body)
    var resp response_t
    err := decoder.Decode(&resp)
    if err != nil {
        panic("PROBLEM")
    }
    fmt.Printf("%+v", resp)*/
    fmt.Printf("Abekat\n")
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":21102", nil)
}