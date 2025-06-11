FROM golang:1.24 AS builder

WORKDIR /app

COPY . .

RUN go mod download

RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o application cmd/app/main.go

FROM alpine AS serve

ENV ENVIRONMENT=production
ENV HTTP_SERVER_PORT=8080
ENV MONGODB_URL=mongodb://localhost:27017

COPY --from=builder /app/application .

ENTRYPOINT ["./application"]

CMD [""]
