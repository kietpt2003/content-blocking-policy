(() => {
  const policies = [...document.querySelectorAll("[data-policy]")];
  const languages = [...document.querySelectorAll("[data-language]")];
  const supported = policies.map((policy) => policy.dataset.policy);
  const descriptions = {
    vi: "Chính sách quyền riêng tư của Home Content Blocker: xử lý dữ liệu cục bộ, cài đặt và chẩn đoán mạng tùy chọn.",
    en: "Home Content Blocker privacy policy: local data processing, settings and optional network diagnostics.",
    "zh-CN":
      "Home Content Blocker 隐私政策：本地数据处理、设置和可选的网络诊断。",
  };

  function render() {
    const url = new URL(window.location.href);
    const requested = url.searchParams.get("lang");
    const anchorLanguage = supported.find((lang) =>
      url.hash.startsWith(`#${lang}-`),
    );
    const browserLanguage = (navigator.languages || [navigator.language])
      .map((lang) => lang.toLowerCase())
      .map((lang) => (lang.startsWith("zh") ? "zh-CN" : lang.split("-")[0]))
      .find((lang) => supported.includes(lang));
    const language =
      anchorLanguage ||
      (supported.includes(requested) ? requested : browserLanguage || "vi");
    policies.forEach((policy) => {
      policy.hidden = policy.dataset.policy !== language;
    });
    languages.forEach((link) => {
      if (link.dataset.language === language)
        link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.documentElement.lang = language;
    const active = policies.find(
      (policy) => policy.dataset.policy === language,
    );
    document.title = `${active.querySelector("h1").textContent} · Home Content Blocker`;
    document.querySelector('meta[name="description"]').content =
      descriptions[language];
    const target = document.getElementById(url.hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }

  languages.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      const url = new URL(window.location.href);
      url.searchParams.set("lang", link.dataset.language);
      url.hash = "";
      window.history.pushState(null, "", url);
      render();
      window.scrollTo(0, 0);
    });
  });
  window.addEventListener("popstate", render);
  window.addEventListener("hashchange", render);
  render();
})();
