import labels from '../../__mocks__/labels.json';

export const useLabels = () => {
  return {
    navigation: labels.navigation,
    banner: labels.banner,
    brand: labels.brand,
    steps: labels.steps,
    brokers: labels.brokers,
    about: labels.about,
    sections: labels.about.sections,
    highlights: labels.highlights,
    footer: labels.footer,
    login: labels.login,
    profile: labels.profile,
    buttons: labels.buttons,
    account: labels.account,
    information: labels.information,
    loader: labels.loader,
    conditions: labels.conditions,
    agreements: labels.agreements,
    accept: labels.accept,
    binnacle: labels.binnacle,
  };
};