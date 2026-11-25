package main

import (
	"log"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/logger"
	"github.com/gofiber/fiber/v3/middleware/static"
	"github.com/gofiber/template/html/v3"
)

type Friends struct {
	Name  string
	Link  string
	Pfp   string
}

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
			"Friends": []Friends{
				{ Name: "inuhepott", Link: "https://inu.hepott.moe", Pfp: "https://inu.hepott.moe/img/inuhepott.webp" },
				{ Name: "Meltude", Link: "https://meltude.me", Pfp: "https://meltude.me/img/root/pfp.webp" },
				{ Name: "alloc4tor", Link: "https://allocator.pages.gay", Pfp: "https://allocator.pages.gay/img/avatar.webp" },
				{ Name: "OctoBanon", Link: "https://octobanon.com", Pfp: "https://avatars.githubusercontent.com/u/82901151" },
				{ Name: "ShadowCj", Link: "https://shadowcj.site", Pfp: "https://avatars.githubusercontent.com/u/155315982" },
			},
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