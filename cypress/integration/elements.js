
export const elements = {
	"Demo Input Username": "#userName",
    "Demo Button Login": "#login",
	"Demo Error Message Login": "#name",
	"Demo Profile": "#userName-label",

    "Input Username": "#user-name",
    "Input Password": "#password",
    "Button Login": "#login-button",
    "Error Message Login": "h3[data-test='error']",
	"Filter Products": "[data-test='product_sort_container']",
	"Social Facebook": "[class='social_facebook']"
};

export const selector = elementSelector => elements[elementSelector] || elementSelector;

const elementIndex = expression => {
	const matches = /:eq\((\d)\)/gm.exec(expression);

	return (
		matches && {
			expression: matches[0],
			index: parseInt(matches[1])
		}
	);
};

const addressElementAt = (expression, pos) => {
	const [rootEl, childEl] = expression.split(pos.expression);

	if (childEl) {
		return cy
			.get(rootEl)
			.eq(pos.index)
			.find(childEl);
	}

	return cy.get(rootEl).eq(pos.index);
};

export default elementName => {
	const expression = selector(elementName);

	const elementPosition = elementIndex(expression);

	if (elementPosition) {
		return addressElementAt(expression, elementPosition);
	}

	return cy.get(expression);
};
