package main

import (
	"log"

	"math/rand"

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
		// list struct for friends banners etc
		type List struct {
			Name  string
			Link  string
			Pfp   string
		}

		//get random num for pfp
		random := rand.Intn(2) + 1 //1 or 2
		
		return c.Render("index", fiber.Map{
			"Title": "home",
			"AvatarNum": random,
			"Friends": []List{
				{ Name: "lumihepott", Link: "https://lumi.hepott.moe", Pfp: "https://lumi.hepott.moe/img/lumihepott.webp" },
				{ Name: "Meltude", Link: "https://meltu.de", Pfp: "https://meltu.de/img/root/pfp.webp" },
				{ Name: "alloc4tor", Link: "https://allocator.pages.gay", Pfp: "https://allocator.pages.gay/img/avatar.webp" },
				{ Name: "OctoBanon", Link: "https://octobanon.com", Pfp: "https://avatars.githubusercontent.com/u/82901151" },
				{ Name: "ShadowCj", Link: "https://shadowcj.site", Pfp: "https://avatars.githubusercontent.com/u/155315982" },
			},
			"Banners": []List{
				{ Link: "https://lumi.hepott.moe", Pfp: "https://lumi.hepott.moe/img/lumihepott_badge.webp" },
				{ Link: "https://meltu.de", Pfp: "https://meltu.de/img/root/MeltingAsh.webp" },
				{ Link: "https://tolya1337.ru", Pfp: "https://tolya1337.ru/img/88x31.webp" },
				{ Link: "https://salfetkk.fun", Pfp: "https://salfetkk.fun/88x31.png" },
				{ Link: "https://hirasawa.ru", Pfp: "https://hirasawa.ru/img/88x31.gif" },
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