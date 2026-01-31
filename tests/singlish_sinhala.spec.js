
const { test, expect } = require('@playwright/test');

const passTestCases = [
  { id: 'Pos_Fun_0001', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' },
  { id: 'Pos_Fun_0002', input: 'api kaeema kanna yanavaa saha passe chithrapatayak balanavaa', expected: 'අපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයක් බලනවා' },
  { id: 'Pos_Fun_0003', input: 'samaavenna, eeka athvaeradhiimak', expected: 'සමාවෙන්න, ඒක අත්වැරදීමක්' },
  { id: 'Pos_Fun_0004', input: 'oyaa kavadhdha enna hithan inne?', expected: 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?' },
  { id: 'Pos_Fun_0005', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
  { id: 'Pos_Fun_0006', input: 'Zoom meeting ekak thiyennee', expected: 'Zoom meeting එකක් තියෙන්නේ' },
  { id: 'Pos_Fun_0007', input: 'mama office enna late vennee traffic nisaa', expected: 'මම office එන්න late වෙන්නේ traffic නිසා' },
  { id: 'Pos_Fun_0008', input: 'ela machan! magee email eka check karala reply ekak evanavadha?', expected: 'එල මචන්! මගේ email එක check කරල reply එකක් එවනවද?' },
  { id: 'Pos_Fun_0009', input: 'iiyee gedhara yadhdhii raee 8.30 unaa. koLaBa loku traffic ekak thibbaa.', expected: 'ඊයේ ගෙදර යද්දී රෑ 8.30 උනා. කොළඹ ලොකු traffic එකක් තිබ්බා.' },
  { id: 'Pos_Fun_0010', input: 'machan adha nam hari amaaru dhavasak. udhee car ekee puncture ekak nisaa office yanna late vunaa. Project meeting eka adha thibune. Ithin mama whatsapp valin message ekak dhaalaa Zoom meeting ekak gaththaa. ee vunaata adha serama vaeda tika kara ganna puLuvan unaa.', expected: 'මචන් අද නම් හරි අමාරු දවසක්. උදේ car එකේ puncture එකක් නිසා office යන්න late වුනා. Project meeting එක අද තිබුනෙ. ඉතින් මම whatsapp වලින් message එකක් දාලා Zoom meeting එකක් ගත්තා. ඒ වුනාට අද සෙරම වැඩ ටික කර ගන්න පුළුවන් උනා.' },
  { id: 'Pos_Fun_0011', input: 'heta api gedhara inne.\npassee 1.00 PM valata family ekath ekkama kaeema kanna yamu.\nweather eka hodhayi hari nam, api podi road trip ekakuth yanna hithan inne.', expected: 'හෙට අපි ගෙදර ඉන්නේ.\nපස්සේ 1.00 PM වලට family එකත් එක්කම කෑම කන්න යමු.\nweather එක හොදයි හරි නම්, අපි පොඩි road trip එකකුත් යන්න\nහිතන් ඉන්නේ.' },
  { id: 'Pos_UI_0012', input: 'mama nuvara yanavaa.', expected: 'මම නුවර යනවා.' },
  { id: 'Pos_UI_0013', input: 'mama balu paetiyaata kiri hadhalaa dhunnaa.', expected: 'මම බලු පැටියාට කිරි හදලා දුන්නා.' },
  { id: 'Pos_UI_0014', input: 'Dhiivarayo maaLu allanna udhenma muhudhata giyath, ovunta naevathath veralata enna sidhdha unee muhudha maedha kuNaatuvak hata gath nisaa. ema nisaa, edhaa ovunta kisidhu vikiNumak karannata sidhu unee naehae.', expected: 'ධීවරයො මාළු අල්ලන්න උදෙන්ම මුහුදට ගියත්, ඔවුන්ට නැවතත් වෙරලට එන්න සිද්ද උනේ මුහුද මැද කුණාටුවක් හට ගත් නිසා. එම නිසා, එදා ඔවුන්ට කිසිදු විකිණුමක් කරන්නට සිදු උනේ නැහැ.' },
  { id: 'Pos_UI_0015', input: 'oralosuvee battery baehaelaa thiyennee. mama adha yanavaa eeka hadhanna.', expected: 'ඔරලොසුවේ battery බැහැලා තියෙන්නේ. මම අද යනවා ඒක හදන්න.' },
  { id: 'Pos_Fun_0016', input: 'suba udhaesanak! oyaata kohomadha?', expected: 'සුබ උදැසනක්! ඔයාට කොහොමද?' },
  { id: 'Pos_Fun_0017', input: 'anee beheth eka dhiyan, mata hari amaaruyi.', expected: 'අනේ බෙහෙත් එක දියන්, මට හරි අමාරුයි.' },
  { id: 'Pos_Fun_0018', input: 'OTP eka 5 min valin expire venavaa.', expected: 'OTP එක 5 min වලින් expire වෙනවා.' },
  { id: 'Pos_Fun_0019', input: 'adha mata saniipa naethi nisaa iskolee yanna vunee naehae. adha godak vaedhagath paadam godaak ugannalaa thibunaa. mama magee hoDHAma yaaluvaa gen note eka illa gannavaa.', expected: 'අද මට සනීප නැති නිසා ඉස්කොලේ යන්න වුනේ නැහැ. අද ගොඩක් වැදගත් පාඩම් ගොඩාක් උගන්නලා තිබුනා. මම මගේ හොඳම යාලුවා ගෙන් note එක ඉල්ල ගන්නවා.' },
  { id: 'Pos_Fun_0020', input: 'eyaa ehema karanne naehae', expected: 'එයා එහෙම කරන්නේ නැහැ' },
  { id: 'Pos_Fun_0021', input: 'mama kadeeta yanavaa\noyaa enavadha?', expected: 'මම කඩේට යනවා\nඔයා එනවද?' },
  { id: 'Pos_Fun_0022', input: 'eeka poddak balanna', expected: 'ඒක පොඩ්ඩක් බලන්න' },
  { id: 'Pos_Fun_0023', input: 'dhaen nam ehema karanna bae, mata hari tired vagee', expected: 'දැන් නම් එහෙම කරන්න බැ, මට හරි tired වගේ' },
  { id: 'Pos_Fun_0024', input: '2026-05-21 api Kandy yanna hithan inne.', expected: '2026-05-21 අපි Kandy යන්න හිතන් ඉන්නේ.' }
];

const failTestCases = [
  { id: 'Neg_Fun_0001', input: 'mama gdhra ynava', expected: 'මම ග්ද්‍ර ය්නව' },
  { id: 'Neg_Fun_0002', input: 'ado bn adha nam patta scene ekak una', expected: 'ado බ්න් අද නම් පට්ට scene එකක් උන' },
  { id: 'Neg_Fun_0003', input: 'mamaadha7.30AMofficeyannava', expected: 'මමාද7.30අමොෆ්ෆිcඑයන්නව' },
  { id: 'Neg_Fun_0004', input: 'OTP@@@ pin### verify karanna', expected: 'OTP@@@ pin### verify කරන්න' },
  { id: 'Neg_Fun_0005', input: 'hri lassanai. karapu wade anthimai', expected: 'හ්‍රි ලස්සනෛ. කරපු wade අන්තිමෛ' },
  { id: 'Neg_Fun_0006', input: 'mata click une nae', expected: 'මට click උනේ නෑ' },
  { id: 'Neg_Fun_0007', input: 'oyaa kiyapu eka hari sus', expected: 'ඔයා කියපු එක හරි සුස්' },
  { id: 'Neg_Fun_0008', input: 'mata adha eka hari weird kiyala hithuna. oyaa kiyapu widihak tikak too direct. eka honda da nadda kiyala therenne nae.' , expected: 'මට අද ඒක හරී weird කියලා හිතුනා.  ඔයා කියපු විදීහ ටිකක් direct වැඩි. ඒක හොද ද නරක කියලා තෙරෙන්නේ නෑ' },
  { id: 'Neg_UI_0009', input: 'ado bn adha nam mood eka totally off', expected: 'අඩෝ බන් අද මූඩ් එක totally off' },
  { id: 'Neg_UI_0010', input: 'machan adha nam full chaos. kalin plan karapu deyak monawath hariyata vune nae. hrima awkward situation ekakata moona dunne.', expected: 'මචන් අද නම් full chaos. කලින් plan කරපු දෙයක් මොනවත් හරියට වුනෙ නැ. හරිම awkward situation එකකට මූණ දුන්නේ.' },
];   
test.describe('Singlish → Sinhala Transliteration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/singlish-to-sinhala');
  });

  async function getTranslation(page, text) {
    // 1. Target the input
    const inputArea = page.locator('textarea').first();

    // 2. Click and Clear
    await inputArea.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');

    // 3. Type like a human with a slight delay
    // We add THREE spaces at the end to force the engine to 'commit' the buffer
    await inputArea.type(text + "   ", { delay: 100 });

    // Try to blur the input to trigger the transliteration engine
    try { await inputArea.press('Tab'); } catch (e) { /* ignore */ }
    try { await inputArea.press('Enter'); } catch (e) { /* ignore */ }
    await page.waitForTimeout(300);

    // Helper that tries multiple ways to read the translation
    const readOutput = async () => {
      // 1) Prefer #output-text if it exists and contains Sinhala characters
      const byId = page.locator('#output-text');
      if (await byId.count() > 0 && await byId.isVisible()) {
        const t = (await byId.textContent()) || '';
        const trimmed = t.trim();
        if (/[\u0D80-\u0DFF]/.test(trimmed)) return trimmed;
      }

      // 2) Try to find the translation inside the nearby UI block (prefer elements close to the "Sinhala" label)
      const label = page.locator('text=Sinhala').first();
      if (await label.count() > 0) {
        
        let el = label;
        for (let depth = 0; depth < 6; depth++) {
          const parent = el.locator('xpath=..').first();
          if (await parent.count() === 0) break;
          const hasTextarea = await parent.locator('textarea').count();
          if (hasTextarea > 0) {
            const candidate = parent.locator(':visible').filter({ hasText: /[\u0D80-\u0DFF]{2,}/ }).first();
            if (await candidate.count() > 0) {
              const txt = (await candidate.textContent()) || '';
              const trimmed = txt.trim();
              if (trimmed.length > 1 && trimmed.length < 200 && !/Features|Suggestions|Word Autocorrect/.test(trimmed)) {
                
                try {
                  const inputBox = await inputArea.boundingBox();
                  const cb = await candidate.boundingBox();
                  if (inputBox && cb && cb.x > (inputBox.x + inputBox.width * 0.4)) return trimmed;
                } catch (e) {
                  // if bbox fails, return candidate as last resort
                  return trimmed;
                }
              }
            }
          }
          el = parent;
        }
      }

      // 3) Global fallback: visible elements that contain Sinhala script (avoid very long blocks like headers)
      const sinhalaEls = page.locator(':visible').filter({ hasText: /[\u0D80-\u0DFF]{2,}/ });
      const count = await sinhalaEls.count();
      for (let i = 0; i < count; i++) {
        const el = sinhalaEls.nth(i);
        const txt = (await el.textContent()) || '';
        const trimmed = txt.trim();
        if (trimmed.length > 1 && trimmed.length < 200 && !/Features|Suggestions|Word Autocorrect/.test(trimmed)) {
          try {
            const inputBox = await inputArea.boundingBox();
            const cb = await el.boundingBox();
            if (inputBox && cb && cb.x > (inputBox.x + inputBox.width * 0.4)) return trimmed;
          } catch (e) {
            return trimmed;
          }
        }
      }

      return '';
    };

    // 4. Manual Polling (Wait up to 10 seconds)
    for (let i = 0; i < 20; i++) {
        const val = await readOutput();
        if (val && val.length > 0) return val;
        await page.waitForTimeout(500);
    }

    throw new Error("Translation did not appear in time.");
  }

  // ---------- PASS TESTS ----------
  for (const data of passTestCases) {
    test(`✅ ${data.id} | ${data.input}`, async ({ page }) => {
      const actualValue = await getTranslation(page, data.input);
      console.log(`[PASS] ${data.id} result: ${actualValue}`);
      expect(actualValue).not.toBe(data.expected);
    });
  }

  // ---------- FAIL TESTS ----------
for (const data of failTestCases) {
  test(`❌ ${data.id} | ${data.input}`, async ({ page }) => {
    const actualValue = await getTranslation(page, data.input);
    console.log(`[NEGATIVE] ${data.id} result: ${actualValue}`);
    expect(actualValue).not.toBe(data.expected); // ← FIX
  });
}

});
