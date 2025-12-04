"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Zap, Shield, Gift, Instagram, Facebook, Twitter } from 'lucide-react';

export default function MagazinePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Magazine Store"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Magazine Store"
          description="Discover premium publications and curated reads from around the world"
          buttons={[
            {
              text: "Browse Collection",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842739710-mdznnofm.jpg"
          imageAlt="Stack of colorful magazines"
          showDimOverlay={true}
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardOne
          title="Featured Magazines"
          description="Explore our most popular and trending publications this month"
          products={[
            {
              id: "1",
              name: "Vogue Latest Issue",
              price: "$12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842740755-c3e4u804.jpg",
              imageAlt: "Vogue magazine"
            },
            {
              id: "2",
              name: "National Geographic Explorer",
              price: "$14.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842741871-kkna3g32.jpg",
              imageAlt: "National Geographic"
            },
            {
              id: "3",
              name: "Wired Technology",
              price: "$11.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842743252-xnnkxzro.jpg",
              imageAlt: "Wired magazine"
            },
            {
              id: "4",
              name: "TIME News & Politics",
              price: "$9.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842744065-sh09tqft.jpg",
              imageAlt: "TIME magazine"
            },
            {
              id: "5",
              name: "Sports Illustrated Annual",
              price: "$15.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842750456-1139fyl9.jpg",
              imageAlt: "Sports Illustrated"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why Choose Our Magazine Store? We provide expertly curated selections from the world's finest publications, delivering quality reading experiences with fast, reliable delivery to your doorstep."
          features={[
            {
              icon: BookOpen,
              title: "Vast Selection",
              description: "Browse thousands of magazines across all categories - fashion, technology, lifestyle, sports, science, and more"
            },
            {
              icon: Zap,
              title: "Fast Delivery",
              description: "Quick shipping with tracking. Receive your favorite magazines fresh and on time"
            },
            {
              icon: Shield,
              title: "Quality Guaranteed",
              description: "Every magazine carefully inspected and sourced from authorized distributors for authenticity"
            },
            {
              icon: Gift,
              title: "Subscriptions Available",
              description: "Subscribe to your favorite titles and save with convenient monthly or annual packages"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Readers Say"
          description="Discover why thousands of magazine enthusiasts trust us for their reading needs"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Fashion Editor",
              company: "Style Weekly",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842751708-51w9vbal.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Tech Journalist",
              company: "Digital Review",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842752966-1ohg1rjc.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Travel Blogger",
              company: "Wanderlust Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842754343-nlledzpc.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Reading Enthusiast",
              company: "Book & Magazine Club",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842755641-tdgdeq9s.jpg",
              imageAlt: "David Park"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured Publications"
          description="Trusted by readers worldwide with partnerships from premium magazine brands"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842757137-wabkpo0v.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842758252-d46vhvb9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842759872-tr8pjqxz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842761840-qstv5mvs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842763093-2nnfbcm9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842764194-v5bby1z9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764842765015-2qtsmpyy.jpg"
          ]}
          textboxLayout="default"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Subscribe to Our Newsletter"
          description="Stay updated with new arrivals, exclusive offers, and curated magazine recommendations delivered to your inbox"
          inputs={[
            {
              name: "email",
              type: "email",
              placeholder: "Enter your email",
              required: true
            },
            {
              name: "name",
              type: "text",
              placeholder: "Your name",
              required: true
            }
          ]}
          textarea={{
            name: "interests",
            placeholder: "Tell us your favorite magazine categories",
            rows: 3,
            required: false
          }}
          buttonText="Subscribe Now"
          onSubmit={(data) => console.log(data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Magazine Store"
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "Browse Magazines",
                  href: "products"
                },
                {
                  label: "Subscriptions",
                  href: "subscriptions"
                },
                {
                  label: "Categories",
                  href: "categories"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Shipping Info",
                  href: "shipping"
                },
                {
                  label: "Returns",
                  href: "returns"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© Magazine Store, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}