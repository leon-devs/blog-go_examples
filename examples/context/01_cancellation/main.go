package main

import (
	"context"
	"fmt"
	"net/http"
	"time"
)

func main() {
	ctx := context.Background()

	// Create the child context and its cancel function:
	childCtx, cancelFn := context.WithCancel(ctx)

	fmt.Println("About to start working...")

	go doSomething(childCtx)

	// Wait 5 seconds.
	// This will allow the long task to keep working.
	time.Sleep(5 * time.Second)

	// Cancel the current context. This will trigger ctx.Done()
	cancelFn()

	fmt.Println("Context cancelled.")

	// Wait two more seconds so we can see the finish result:
	time.Sleep(1 * time.Second)

	fmt.Println("All done.")
}

func doSomething(ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			fmt.Println("Work cancelled.")
			return

		default:
			// We're running a really long task here:

			fmt.Println("Working...")
			time.Sleep(1 * time.Second)
		}
	}
}

func processHTTPRequest(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	for {
		select {
		case <-ctx.Done():
			fmt.Println("Work cancelled.")
			return

		default:
			// We're running a really long task here:

			fmt.Println("Working...")
			time.Sleep(1 * time.Second)
		}
	}
}
