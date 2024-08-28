let body = document.body;
let createElement = (
  newElement,
  elementClass = null,
  elementContainer,
  elementContent = null,
  attributes = {}
) => {
  let htmlElement = document.createElement(newElement);
  if (elementClass) {
    htmlElement.classList.add(elementClass);
  }

  if (attributes) {
    for (let attr_key in attributes) {
      htmlElement.setAttribute(attr_key, attributes[attr_key]);
    }
  }
  if (elementContent != null) {
    htmlElement.innerHTML = elementContent;
  }

  if (typeof elementContainer === "string") {
    let selectParent = document.querySelector(elementContainer);
    if (selectParent) {
      selectParent.appendChild(htmlElement);
    } else {
      console.log(
        `Error While creating element "${newElement}" having class name "${elementClass}"`
      );
    }
  } else {
    elementContainer.appendChild(htmlElement);
  }
};

createElement("div", "main_container", body);
createElement("div", "sub_container", ".main_container");
createElement("img", null, ".sub_container", null, {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXV6JCG-8u0FIIe7gAd4QAzE4bgoNVyHXzMg&s",
  alt: "An Image",
});
createElement("a", "link", ".sub_container", "Click here to open google.com", {
  href: "https://www.google.com/",
  target: "_blank",
  id: "a_link",
});
