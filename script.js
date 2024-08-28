let body = document.body;
let new_element_func = (
  element_name,
  element_class = null,
  elem_allocation,
  elem_content = null,
  attributes = {}
) => {
  let new_elem = document.createElement(element_name);
  if (element_class) {
    new_elem.classList.add(element_class);
  }

  if (attributes) {
    for (let attr_key in attributes) {
      console.log(new_elem.setAttribute(attr_key, attributes[attr_key]));
    }
  }
  if (elem_content != null) {
    new_elem.innerHTML = elem_content;
  }

  if (typeof elem_allocation === "string") {
    let selector = document.querySelector(elem_allocation);
    if (selector) {
      selector.appendChild(new_elem);
    } else {
      console.log(
        `Error While creating element "${element_name}" having class name "${element_class}"`
      );
    }
  } else {
    elem_allocation.appendChild(new_elem);
  }
};

new_element_func("div", "main_container", body);
new_element_func("div", "sub_container", ".main_container");
new_element_func("img", null, ".sub_container", null, {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXV6JCG-8u0FIIe7gAd4QAzE4bgoNVyHXzMg&s",
  alt: "An Image",
});
new_element_func(
  "a",
  "link",
  ".sub_container",
  "Click here to open google.com",
  {
    href: "www.google.com",
    target: "_blank",
    id: "a_link",
  }
);
