const autoCheck = function() {
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
 * @noreturn
 */
(async function getCheckDone() {
  try {
    if (document.title) {
      let ifChange = false;
			let notAd = false;
			let done = false;
      await document.body.addEventListener('DOMSubtreeModified', function() {
        ifChange = true;
      }, false);
			await autoCheck();
			done = true;
      if (ifChange) {
				await autoCheck();
				done = true; 
      }
      const spans = document.getElementsByTagName('span');
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes('광고성')) {
          spans[i].click();
          notAd = true;
          break;
        }
      };
      if (!notAd) {
        const labels = document.getElementsByTagName('label');
        for (let i = 0; i < labels.length; i++) {
          if (labels[i].innerText.includes('광고성')) {
            labels[i].click();
            break;
          }
        };
			}
			if (!done) {
				autoCheck();
			}
    }
  } catch (e) {
    console.error;
  }
})();
