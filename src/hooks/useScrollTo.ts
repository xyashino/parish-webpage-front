export const useScrollTo = (selector: string) => {
  const element = document.querySelector(selector) as HTMLElement;

  const scrollToElement = () => {
    if (element) {
      element.scrollTo(0, 0);
      element.focus();
    }
  };

  return { scrollToElement };
};
