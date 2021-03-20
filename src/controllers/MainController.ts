export class MainController {
  public createView(): HTMLDivElement {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = "Welcome to our Main Page!";

    const article = document.createElement("div");
    article.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula pretium odio. Duis pretium a nisi ac iaculis. Mauris fringilla eget massa et scelerisque. Phasellus sit amet placerat nisl. Proin quam orci, iaculis pulvinar cursus sed, ullamcorper sed turpis. Nullam dui massa, sagittis vitae viverra eget, euismod vel tortor. Donec viverra turpis ex, ac maximus massa mattis placerat. Proin eu.";

    const button = document.createElement("button");
    button.innerText = "Login";

    container.append(title, article, button);

    return container;
  }
}
