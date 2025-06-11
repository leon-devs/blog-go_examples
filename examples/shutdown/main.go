package main

import (
	"context"
	"log"

	"github.com/leon-devs/blog-go_examples/examples/shutdown/application"
)

func main() {
	ctx := context.Background()

	app := application.NewApplication(ctx)

	if err := app.Start(ctx); err != nil {
		log.Panicf("Error starting application: %s", err.Error())
	}
}
