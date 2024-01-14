import $ from "./elements";
import { typeKeySelector } from "./typeKeys";

export const click = element => {
	$(element).click();
};

export const clear = element => {
	$(element).clear();
};

export const pressKey = key => {
	$("body").type(typeKeySelector(key));
};

export const waitForElementVisibility = (element) => {
	$(element).should('be.visible');
};

export const waitForEnabledElement = (element) => {
	$(element).should('be.visible').should('not.be.disabled');
};

export const select = (value, element) => {
	$(element).then(elem => {
		if (!elem.is("select")) {
			click(element);
			return click(value);
		}

		$(elem).select(value);
	});
};

export const type = (text, element) => {
	$(element)
		.type(text, { force: true })
		.trigger("input");
};

export const toggleCheckbox = (element, checked) => {
	if (checked) {
		$(element).check();
	} else {
		$(element).uncheck();
	}
};

export const assertInputValueEQ = (value, element) => {
	$(element).should($el => {
		expect($el).to.contain(value);
	});
};

export const assertNotInputValueNotEQ = (text, element) => {
	$(element).should($el => {
		expect($el).not.to.contain(text);
	});
};

export const wait = ms => {
	cy.wait(ms);
};

export const should = (element, expectation) => {
	let [shouldExpr, ...values] = expectation.split(":");
	const trimmedValues = values.map(val => val.trim());

	shouldExpr = shouldExpr.replace(/\s/g, ".");

	if (trimmedValues) {
		return $(element).should(shouldExpr, ...trimmedValues);
	}

	$(element).should(shouldExpr);
};

const changeTab = newTab => {
	click(newTab);
};

const scrollTo = position => {
	cy.scrollTo(position);
};

export const scrollToElement = element =>{
	$(element).scrollIntoView();
}

const scrollElementToPx = (element, position) => {
	$(element).scrollTo(0, position);
};