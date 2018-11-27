const domainAddress = new RegExp(/(?<=@).+$/g);
const domainAddressWithoutSecondLevel = new RegExp(/(?<=@)[^.]+$/g);

// exec with domainAddress
const secondLevel = new RegExp(/\.(?<=\.).+$/g);
