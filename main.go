package main

import (
	"log"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/logger"
	"github.com/gofiber/fiber/v3/middleware/static"
	"github.com/gofiber/template/html/v3"
)

func main() {
	engine := html.New("./views", ".html")

	app := fiber.New(fiber.Config{
		TrustProxy:  true,
		ProxyHeader: fiber.HeaderXForwardedFor,
		TrustProxyConfig: fiber.TrustProxyConfig{
			Proxies: []string{"127.0.0.1"},
		},

		Views: engine,

		BodyLimit: 50 * 1024 * 1024,
	})

	app.Use(logger.New())

	app.Get("/*", static.New("./public"))

	// home
	app.Get("/", func(c fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "home",
		}, "layouts/main")
	})

	// faq
	app.Get("/faq", func(c fiber.Ctx) error {
		return c.Render("faq", fiber.Map{
			"Title": "faq",
		}, "layouts/main")
	})

	// donate
	app.Get("/donate", func(c fiber.Ctx) error {
		return c.Render("donate", fiber.Map{
			"Title": "donate",
		}, "layouts/main")
	})

	app.Use(func(c fiber.Ctx) error {
		return c.SendFile("./public/404.html")
	})

	log.Fatal(app.Listen("127.0.0.1:7014"))
}