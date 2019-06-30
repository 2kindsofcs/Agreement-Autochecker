addModichecker();
setTimeout(getCheckDone, 1000);

/**
 * @noreturn
 */
async function addModichecker() {
  await document.body.addEventListener('DOMSubtreeModified', getCheckDone, false);
}

/**
 * @noreturn
 */
const autoCheck = function () {
  const pageTitle = document.title;
  const inputList = document.getElementsByTagName('input');
  const crit1 = pageTitle.includes('본인') && pageTitle.includes('확인');
  const crit2 = pageTitle.includes('휴대폰') && pageTitle.includes('인증');
  if (crit1 || crit2) {
    for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].type === 'checkbox') {
        inputList[i].checked = true;
      }
    }
  }
};

/**
 * @param {String} tagname
 * @return {boolean}
 */
const uncheckAd = function (tagname) {
  let clicked = false
  const elements = document.getElementsByTagName(tagname);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].innerText.includes('광고성')) {
      elements[i].click();
      clicked = true;
      break;
    }
  };
  return clicked;
}

/**
 * @noreturn
 */
async function getCheckDone() {
  try {
    if (document.title) {
      await autoCheck();
      let notAd = await uncheckAd('span');
      if (!notAd) {
        await uncheckAd('label');
      }
    }
  } catch (e) {
    console.error;
  }
};
