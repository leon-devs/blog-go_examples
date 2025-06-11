package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	environment := strings.TrimSpace(os.Getenv("ENVIRONMENT"))
	if environment == "" {
		log.Println("Missing ENVIRONMENT variable. Using 'development' as default.")
		environment = "development"
	}

	httpServerPort := strings.TrimSpace(os.Getenv("HTTP_SERVER_PORT"))
	if httpServerPort == "" {
		log.Fatal("Error: Missing HTTP_SERVER_PORT variable.")
	}

	httpServer := &http.Server{
		Addr:    fmt.Sprintf(":%s", httpServerPort),
		Handler: router,
	}

	log.Printf("Current environment: %s\n", environment)

	log.Printf("Starting HTTP server at port: %s\n", httpServerPort)

	if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
		log.Fatalf("Error starting HTTP server: %s\n", err.Error())
	}
}
