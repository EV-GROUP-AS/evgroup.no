import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import {
  Footprints,
  InfinityIcon,
  Palette,
} from "https://esm.sh/lucide-react@0.468.0?deps=react@18.3.1";

const h = React.createElement;

function ArrowIcon() {
  return h(
    "svg",
    {
      "aria-hidden": "true",
      className: "arrow-icon",
      fill: "none",
      viewBox: "0 0 20 20",
    },
    h("path", {
      d: "M4 10h11m-4.5-4.5L15 10l-4.5 4.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
    }),
  );
}

function Mark() {
  return h(
    "svg",
    {
      "aria-hidden": "true",
      className: "brand-mark",
      fill: "none",
      viewBox: "0 0 42 42",
    },
    h("rect", {
      height: "40",
      rx: "12",
      stroke: "currentColor",
      strokeWidth: "1.5",
      width: "40",
      x: "1",
      y: "1",
    }),
    h("path", {
      d: "M12 13.5h17.5M12 21h14M12 28.5h9.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
    }),
  );
}

function Brand() {
  return h(
    "a",
    { "aria-label": "EV Group home", className: "brand", href: "#top" },
    h(Mark),
    h("span", null, "EV GROUP"),
  );
}

function Header() {
  return h(
    "header",
    { className: "site-header" },
    h(
      "div",
      { className: "container nav" },
      h(Brand),
      h(
        "nav",
        { "aria-label": "Main navigation", className: "nav-links" },
        h("a", { href: "#approach" }, "Approach"),
        h("a", { href: "#focus" }, "Impact"),
        h("a", { href: "#products" }, "Products"),
      ),
      h(
        "a",
        {
          className: "nav-contact",
          href: "mailto:contact@evgroup.no?subject=Request%20a%20demo",
        },
        h("span", null, "Request a demo"),
        h(ArrowIcon),
      ),
    ),
  );
}

const focusAreas = [
  {
    number: "01",
    title: "Accelerate delivery",
    text: "We build AI tools that remove repetitive work and help teams move from idea to execution faster.",
  },
  {
    number: "02",
    title: "Reduce complexity",
    text: "We turn advanced technology into focused products that fit naturally into everyday workflows.",
  },
  {
    number: "03",
    title: "Lower costs",
    text: "We use automation to help teams spend less time on overhead and more time creating value.",
  },
];

const products = [
  {
    icon: "visualise",
    title: "Visualise",
    type: "Design application",
    text: "A focused design environment for turning ideas into clear, usable visual concepts.",
  },
  {
    icon: "hyperloop",
    title: "Hyperloop",
    type: "Backlog and product management",
    text: "A smarter way to shape priorities, manage product work, and keep development moving.",
  },
  {
    icon: "anywhere",
    title: "Anywhere",
    type: "Agentic coding across devices",
    text: "A simpler way to work with coding agents from the devices that are already within reach.",
  },
];

function FocusCard({ number, text, title }) {
  return h(
    "article",
    { className: "focus-card" },
    h("span", { className: "focus-number" }, number),
    h("h3", null, title),
    h("p", null, text),
  );
}

function ProductIcon({ name }) {
  const icons = {
    anywhere: Footprints,
    hyperloop: InfinityIcon,
    visualise: Palette,
  };

  return h(icons[name], {
    "aria-hidden": "true",
    className: "product-icon",
    strokeWidth: 1.45,
  });
}

function ProductCard({ icon, text, title, type }) {
  return h(
    "article",
    { className: "product-card" },
    h(
      "div",
      { className: "product-card-top" },
      h("span", { className: "product-status" }, "In development"),
    ),
    h("div", { className: "product-icon-shell" }, h(ProductIcon, { name: icon })),
    h(
      "div",
      { className: "product-card-body" },
      h("p", { className: "product-type" }, type),
      h("h3", null, title),
      h("p", { className: "product-text" }, text),
    ),
  );
}

function App() {
  return h(
    React.Fragment,
    null,
    h(Header),
    h(
      "main",
      null,
      h(
        "section",
        { className: "hero", id: "top" },
        h(
          "div",
          { className: "container hero-layout" },
          h(
            "div",
            { className: "hero-copy" },
            h("p", { className: "eyebrow" }, "Tools for better development"),
            h(
              "h1",
              null,
              "Building smarter.",
              h("span", null, " Moving faster."),
            ),
            h(
              "p",
              { className: "hero-intro" },
              "EV Group builds AI tools that accelerate development, simplify workflows, and reduce the cost of getting work done.",
            ),
            h(
              "a",
              {
                className: "primary-link",
                href: "mailto:contact@evgroup.no?subject=Request%20a%20demo",
              },
              h("span", null, "Request a demo"),
              h(ArrowIcon),
            ),
          ),
          h(
            "div",
            { "aria-hidden": "true", className: "hero-visual" },
            h("div", { className: "visual-orbit orbit-one" }),
            h("div", { className: "visual-orbit orbit-two" }),
            h("div", { className: "visual-orbit orbit-three" }),
            h(
              "div",
              { className: "visual-core" },
              h("span", null, "EV"),
              h("small", null, "GROUP"),
            ),
            h("span", { className: "visual-dot dot-one" }),
            h("span", { className: "visual-dot dot-two" }),
            h("span", { className: "visual-dot dot-three" }),
          ),
        ),
        h(
          "div",
          { className: "container hero-footer" },
          h("span", null, "Based in Norway"),
          h("span", null, "Built for momentum"),
        ),
      ),
      h(
        "section",
        { className: "approach section", id: "approach" },
        h(
          "div",
          { className: "container section-grid" },
          h(
            "div",
            null,
            h("p", { className: "eyebrow" }, "Our approach"),
          ),
          h(
            "div",
            { className: "section-content" },
            h(
              "h2",
              null,
              "We turn the potential of AI into ",
              h("em", null, "practical"),
              " tools for real work.",
            ),
            h(
              "p",
              null,
              "Our focus is simple: identify costly friction, design a better workflow, and build AI-powered tools that make development faster and more efficient.",
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "focus section", id: "focus" },
        h(
          "div",
          { className: "container" },
          h(
            "div",
            { className: "section-heading" },
            h("p", { className: "eyebrow" }, "Where we create impact"),
            h("h2", null, "Practical AI. Measurable impact."),
          ),
          h(
            "div",
            { className: "focus-grid" },
            focusAreas.map((area) => h(FocusCard, { ...area, key: area.number })),
          ),
        ),
      ),
      h(
        "section",
        { className: "products section", id: "products" },
        h(
          "div",
          { className: "container" },
          h(
            "div",
            { className: "section-heading products-heading" },
            h("p", { className: "eyebrow" }, "Our products"),
            h("h2", null, "Tools designed to move development forward."),
          ),
          h(
            "div",
            { className: "product-grid" },
            products.map((product) =>
              h(ProductCard, { ...product, key: product.title }),
            ),
          ),
        ),
      ),
      h(
        "section",
        { className: "contact", id: "contact" },
        h(
          "div",
          { className: "container contact-layout" },
          h(
            "div",
            null,
            h("p", { className: "eyebrow" }, "Start a conversation"),
            h("h2", null, "Let’s make the work move faster."),
          ),
          h(
            "a",
            {
              className: "contact-link",
              href: "mailto:contact@evgroup.no?subject=Request%20a%20demo",
            },
            h("span", null, "Request a demo"),
            h(ArrowIcon),
          ),
        ),
      ),
    ),
    h(
      "footer",
      { className: "site-footer" },
      h(
        "div",
        { className: "container footer-layout" },
        h(
          "div",
          { className: "footer-details" },
          h("p", { className: "footer-name" }, "EV-group"),
          h("p", null, "Oslo, Norway"),
          h("a", { href: "mailto:contact@evgroup.no" }, "contact@evgroup.no"),
        ),
        h("p", null, `© ${new Date().getFullYear()} EV-group. All rights reserved.`),
      ),
    ),
  );
}

createRoot(document.getElementById("root")).render(h(App));
