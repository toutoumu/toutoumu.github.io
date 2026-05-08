const APP_STORE_URL = "https://apps.apple.com/app/id6764205706";
const CONTACT_EMAIL = "toutoumu88@gmail.com";
const CONTACT_SUBJECT_EN = "FilesApp Product Inquiry";
const CONTACT_SUBJECT_ZH = "FilesApp 产品咨询";

const translations = {
  "zh-CN": {
    meta: {
      title: "FilesApp - 在 iPhone 和 iPad 上统一管理本地与远程文件",
      description:
        "FilesApp 是一款面向 iPhone 和 iPad 的文件管理应用，统一管理本地目录、外部挂载文件夹与 AList、WebDAV、SFTP、SMB 等远程来源，支持预览、播放、传输、对比、PDF 工具与加密容器。"
    },
    nav: {
      features: "功能",
      protocols: "连接",
      workflow: "工作流",
      pro: "免费与激励",
      download: "App Store 下载"
    },
    hero: {
      eyebrow: "iPhone & iPad 文件管理",
      title: "把本地文件、外部目录和远程服务器放到同一个工作区里。",
      text:
        "FilesApp 面向真实文件工作流设计。你可以在一套界面里浏览、搜索、预览、传输、播放和编辑文件，不需要在 Documents、外部文件夹、AList、WebDAV、SFTP、SMB 之间来回切换。",
      ctaDownload: "App Store 下载",
      ctaFeatures: "查看核心功能",
      downloadNote: "支持 iPhone 和 iPad，可通过 App Store 获取。",
      pill1: "本地 Documents",
      pill2: "外部挂载目录",
      pill3: "AList / WebDAV / SFTP / SMB",
      pill4: "所有功能可免费使用，部分能力可通过激励广告解锁"
    },
    screen: {
      headerTitle: "文件",
      headerBadge: "统一工作区",
      locationsTitle: "位置",
      location1Name: "我的文件",
      location1Type: "本地",
      location2Name: "项目资料",
      location2Type: "外部目录",
      location3Name: "家庭 NAS",
      location3Type: "SMB",
      location4Name: "工作服务器",
      location4Type: "WebDAV",
      actionsTitle: "可直接操作",
      action1: "上传",
      action2: "下载",
      action3: "重命名",
      action4: "移动",
      action5: "复制",
      action6: "删除",
      stat1Title: "文本对比",
      stat1Text: "查看差异摘要与逐行变化",
      stat2Title: "PDF 工具",
      stat2Text: "文本转 PDF、多图转 PDF、合并 PDF"
    },
    floating: {
      previewLabel: "流式预览",
      previewText: "视频、音频、图片、PDF、文本、压缩包",
      toolsLabel: "高级工具",
      toolsText: "文件夹对比、加密容器、下载中心、本地 Web 上传"
    },
    trust: {
      1: {
        title: "统一入口",
        text: "本地与远程文件在同一套列表、搜索和操作模型里完成。"
      },
      2: {
        title: "为移动端设计",
        text: "面向 iPhone 与 iPad 的浏览、播放、预览和轻量处理体验。"
      },
      3: {
        title: "不止是浏览器",
        text: "除了文件管理，还包含对比、PDF、下载、音乐播放和加密工具。"
      },
      4: {
        title: "免费可用",
        text: "不是功能残缺的免费版，部分高级能力通过激励广告即可继续使用。"
      }
    },
    features: {
      headingEyebrow: "核心功能",
      headingTitle: "围绕真实文件任务，而不是只做一个“能看目录”的 App",
      headingText:
        "官网文案基于应用当前功能整理而来，重点强调你在日常工作中真正会反复用到的几类能力。",
      card1: {
        title: "统一管理不同来源",
        text: "同时管理 App 本地文件、通过系统授权挂载的外部目录，以及多种远程服务器来源。",
        b1: "统一目录浏览、搜索、排序和属性查看",
        b2: "本地与远程共用一致的文件操作逻辑",
        b3: "适合把“手机文件 + NAS + 服务器”放在一个入口里处理"
      },
      card2: {
        title: "打开和预览更多文件类型",
        text: "面向实际内容消费场景，支持图片、视频、音频、PDF、文本、压缩包以及常见文档类型预览。",
        b1: "远程媒体可直接播放，不必都先下载到本地",
        b2: "文本可直接阅读与编辑",
        b3: "文档类文件可快速进入系统预览链路"
      },
      card3: {
        title: "跨来源传输与整理",
        text: "不是单向下载器，而是一套完整的文件移动、复制、上传和导入工作流。",
        b1: "本地到远程上传，远程到本地下载",
        b2: "同一界面中完成重命名、新建文件夹、删除和批量操作",
        b3: "下载中心可持续跟踪下载状态和历史记录"
      },
      card4: {
        title: "为内容处理准备的工具箱",
        text: "除了管理文件，还内置一批面向整理、核对与转换的工具。",
        b1: "文本对比与文件夹对比",
        b2: "文本生成 PDF、多图生成 PDF、合并 PDF",
        b3: "音乐播放器与播放列表管理"
      },
      card5: {
        title: "本地 Web 上传入口",
        text: "让同一局域网内的浏览器把文件直接传到你的设备，无需额外搭建服务。",
        b1: "适合临时从电脑传素材到 iPhone 或 iPad",
        b2: "减少 AirDrop 不稳定或聊天工具压缩带来的麻烦",
        b3: "更适合小范围、即时的文件投递"
      },
      card6: {
        title: "为隐私和长期使用准备",
        text: "在文件管理之上，进一步补齐高频但经常被忽略的能力。",
        b1: "支持创建与挂载加密容器",
        b2: "所有功能都可以免费体验",
        b3: "部分高级能力可通过激励广告获得时效解锁"
      }
    },
    protocols: {
      eyebrow: "连接能力",
      title: "一套交互，同时覆盖本地、外部目录和常见远程协议",
      text:
        "FilesApp 把不同连接方式收敛到统一的文件服务层上，所以你不必为每种远程来源重新学习一套界面。",
      card1: {
        title: "本地 Documents",
        text: "面向日常文件管理和工具输出的基础工作区。"
      },
      card2: {
        title: "外部挂载目录",
        text: "通过系统授权访问更多文件夹，把外部目录纳入同一视图。"
      },
      card3: {
        title: "AList / OpenList",
        text: "适合已有 AList 服务的远程文件访问、播放和传输。"
      },
      card4: {
        title: "WebDAV",
        text: "覆盖常见云盘、NAS 与自建文件服务的标准化接入方式。"
      },
      card5: {
        title: "SFTP",
        text: "适合开发机、服务器和受控环境中的安全文件访问。"
      },
      card6: {
        title: "SMB",
        text: "连接家庭 NAS、办公共享目录和局域网内常见存储设备。"
      }
    },
    workflow: {
      eyebrow: "典型场景",
      title: "从“找文件”到“处理文件”，一条链路尽量少跳转",
      card1: {
        title: "在手机上访问 NAS 或远程目录",
        text: "连接 SMB、WebDAV、SFTP 或 AList 后，直接浏览文件树，按需预览、下载或播放远程内容。"
      },
      card2: {
        title: "整理本地与远程之间的文件",
        text: "把图片、文档、音频或压缩包在不同来源间移动、复制、导入、上传，不用来回切换多个 App。"
      },
      card3: {
        title: "快速检查差异和生成文档",
        text: "对比文本内容、核对目录差异，或者把文本和图片整理成 PDF，适合轻量办公与内容归档。"
      },
      card4: {
        title: "在设备上构建自己的文件中心",
        text: "通过下载中心、音乐播放列表、本地 Web 上传和加密容器，把 FilesApp 变成日常的个人文件入口。"
      }
    },
    free: {
      eyebrow: "免费与激励",
      title: "核心思路是尽量让所有功能都能免费用",
      text:
        "FilesApp 不想做“免费只能看看，真正功能都锁住”的产品。核心能力默认面向所有用户开放，部分高级功能会在特定阶段通过激励广告提供解锁时段；如果你希望长期无打扰使用，也可以选择会员方案。",
      card1: {
        title: "所有人都能体验完整能力",
        b1: "文件夹对比、文本对比、PDF 工具都不是永久封死",
        b2: "本地文件管理保持可用，不做基础能力阉割",
        b3: "适合先免费体验，再决定是否长期使用"
      },
      card2: {
        title: "激励广告负责解锁部分高级场景",
        b1: "部分高级能力会通过激励广告获得时效权限",
        b2: "适合偶尔需要文件夹对比、PDF 工具或更多连接位的用户",
        b3: "让轻度用户也能低门槛用到完整工作流"
      },
      card3: {
        title: "会员是增强体验，不是唯一入口",
        b1: "适合希望更稳定、长期、少打扰使用的重度用户",
        b2: "可移除广告并减少反复触发激励解锁的频率",
        b3: "如果只是偶尔用高级功能，免费加激励的方式也能覆盖"
      }
    },
    cta: {
      title: "为本地文件、远程存储和移动办公准备的统一入口",
      text:
        "如果你希望在 iPhone 或 iPad 上更顺手地管理文件、访问服务器、播放媒体、核对差异并处理 PDF，FilesApp 更接近一个可长期使用的工作台。你可以先免费使用完整能力，再按自己的频率决定是否接受激励解锁或升级会员。",
      download: "去 App Store 下载",
      contact: "联系开发者"
    },
    footer: {
      text: "一款面向 iPhone 和 iPad 的本地与远程文件管理应用。",
      download: "App Store 下载",
      terms: "用户协议",
      privacy: "隐私政策"
    }
  },
  en: {
    meta: {
      title: "FilesApp - One workspace for local and remote files on iPhone and iPad",
      description:
        "FilesApp is a file manager for iPhone and iPad that brings together local folders, externally mounted directories, and remote sources like AList, WebDAV, SFTP, and SMB, with preview, playback, transfer, comparison, PDF tools, and encrypted containers."
    },
    nav: {
      features: "Features",
      protocols: "Connections",
      workflow: "Workflows",
      pro: "Free & Rewards",
      download: "Download on App Store"
    },
    hero: {
      eyebrow: "File Management for iPhone & iPad",
      title: "Keep local files, mounted folders, and remote servers in one workspace.",
      text:
        "FilesApp is built around real file workflows. Browse, search, preview, transfer, play, and edit files in one interface without jumping between Documents, external folders, AList, WebDAV, SFTP, and SMB.",
      ctaDownload: "Download on App Store",
      ctaFeatures: "Explore Features",
      downloadNote: "Available for iPhone and iPad through the App Store.",
      pill1: "Local Documents",
      pill2: "Mounted External Folders",
      pill3: "AList / WebDAV / SFTP / SMB",
      pill4: "All features are free to access, with some advanced actions unlocked through rewarded ads"
    },
    screen: {
      headerTitle: "Files",
      headerBadge: "Unified Workspace",
      locationsTitle: "Locations",
      location1Name: "My Files",
      location1Type: "Local",
      location2Name: "Project Assets",
      location2Type: "Mounted",
      location3Name: "Home NAS",
      location3Type: "SMB",
      location4Name: "Work Server",
      location4Type: "WebDAV",
      actionsTitle: "Quick Actions",
      action1: "Upload",
      action2: "Download",
      action3: "Rename",
      action4: "Move",
      action5: "Copy",
      action6: "Delete",
      stat1Title: "Text Compare",
      stat1Text: "Review summaries and line-by-line differences",
      stat2Title: "PDF Tools",
      stat2Text: "Text to PDF, images to PDF, merge PDF"
    },
    floating: {
      previewLabel: "Streaming Preview",
      previewText: "Video, audio, images, PDF, text, and archives",
      toolsLabel: "Power Tools",
      toolsText: "Folder compare, encrypted containers, download center, local web upload"
    },
    trust: {
      1: {
        title: "One Entry Point",
        text: "Local and remote files share the same browsing, search, and action model."
      },
      2: {
        title: "Designed for Mobile",
        text: "Built for browsing, playback, preview, and light file work on iPhone and iPad."
      },
      3: {
        title: "More Than a Browser",
        text: "Beyond file management, it includes compare tools, PDF actions, downloads, music playback, and encryption."
      },
      4: {
        title: "Free to Use",
        text: "This is not a crippled free tier. Some advanced actions stay available through rewarded ads."
      }
    },
    features: {
      headingEyebrow: "Core Features",
      headingTitle: "Built for real file tasks, not just another directory viewer",
      headingText:
        "This website copy is based on the app's actual capabilities, with an emphasis on the features people repeatedly need in day-to-day file work.",
      card1: {
        title: "Manage Different Sources Together",
        text: "Work with in-app local files, system-authorized mounted folders, and multiple remote server types from the same UI.",
        b1: "Unified browsing, search, sorting, and property views",
        b2: "Consistent actions across local and remote sources",
        b3: "A practical hub for phone files, NAS storage, and servers"
      },
      card2: {
        title: "Preview More File Types",
        text: "Built for real content workflows with support for images, video, audio, PDF, text, archives, and common document previews.",
        b1: "Remote media can play directly without downloading everything first",
        b2: "Text files can be opened and edited directly",
        b3: "Document-style files can quickly enter the system preview flow"
      },
      card3: {
        title: "Transfer and Organize Across Sources",
        text: "Not just a downloader, but a complete workflow for moving, copying, uploading, and importing files.",
        b1: "Upload from local to remote, download from remote to local",
        b2: "Rename, create folders, delete, and batch actions in one place",
        b3: "A download center keeps track of progress and history"
      },
      card4: {
        title: "A Toolbox for File Work",
        text: "Beyond management, FilesApp includes tools for reviewing, comparing, and converting content.",
        b1: "Text compare and folder compare",
        b2: "Text to PDF, images to PDF, and merge PDF",
        b3: "Music playback with playlist management"
      },
      card5: {
        title: "Local Web Upload",
        text: "Send files from a browser on the same network directly to your device without setting up extra services.",
        b1: "Useful for quick transfers from a desktop to iPhone or iPad",
        b2: "Helps avoid flaky AirDrop sessions or messaging app compression",
        b3: "Best for lightweight, instant local delivery"
      },
      card6: {
        title: "Built for Privacy and Long-Term Use",
        text: "The app goes beyond file browsing and fills in several high-frequency gaps people usually notice later.",
        b1: "Create and mount encrypted containers",
        b2: "All features remain available to try for free",
        b3: "Some advanced actions can be temporarily unlocked through rewarded ads"
      }
    },
    protocols: {
      eyebrow: "Connections",
      title: "One interaction model across local storage, mounted folders, and common remote protocols",
      text:
        "FilesApp brings different connection methods into the same file service model, so you do not need to learn a new UI for each remote backend.",
      card1: {
        title: "Local Documents",
        text: "A base workspace for everyday file management and tool output."
      },
      card2: {
        title: "Mounted External Folders",
        text: "Use system authorization to include more folders in the same workspace."
      },
      card3: {
        title: "AList / OpenList",
        text: "A practical option for remote access, playback, and transfers if you already use AList."
      },
      card4: {
        title: "WebDAV",
        text: "A standard path for cloud storage, NAS devices, and self-hosted file services."
      },
      card5: {
        title: "SFTP",
        text: "A strong fit for developer machines, servers, and controlled environments."
      },
      card6: {
        title: "SMB",
        text: "Connect home NAS devices, office shares, and common local network storage."
      }
    },
    workflow: {
      eyebrow: "Common Workflows",
      title: "Go from finding files to processing files with fewer context switches",
      card1: {
        title: "Access NAS and remote directories on mobile",
        text: "Connect to SMB, WebDAV, SFTP, or AList and browse file trees, then preview, download, or play content as needed."
      },
      card2: {
        title: "Organize files between local and remote",
        text: "Move, copy, import, and upload images, documents, audio, or archives across different sources without bouncing between apps."
      },
      card3: {
        title: "Review differences and generate documents quickly",
        text: "Compare text, inspect folder differences, or turn text and images into PDFs for light office work and archiving."
      },
      card4: {
        title: "Build a personal file hub on your device",
        text: "Use the download center, music playlists, local web upload, and encrypted containers to make FilesApp your everyday file entry point."
      }
    },
    free: {
      eyebrow: "Free & Rewards",
      title: "The goal is to keep the full app meaningfully usable for free",
      text:
        "FilesApp is not designed as a free shell where the real features stay locked away. Core capabilities are available to everyone, while some advanced actions can be unlocked with rewarded ads for a period of time. Membership remains an option for a cleaner long-term experience.",
      card1: {
        title: "Everyone can try the full workflow",
        b1: "Folder compare, text compare, and PDF tools are not permanently blocked",
        b2: "Core local file management stays available without feature stripping",
        b3: "A good fit for trying the app deeply before deciding on long-term usage"
      },
      card2: {
        title: "Rewarded ads unlock selected advanced scenarios",
        b1: "Some advanced actions become available through time-based rewarded access",
        b2: "Useful for people who only occasionally need compare tools, PDF actions, or extra connection slots",
        b3: "Keeps the complete workflow accessible for lighter users"
      },
      card3: {
        title: "Membership improves the experience but is not the only path",
        b1: "Best for heavier users who want a more stable and less interrupted workflow",
        b2: "Can reduce repeated reward prompts and remove ads",
        b3: "If you only need advanced features once in a while, free plus rewarded access can still cover it"
      }
    },
    cta: {
      title: "A unified workspace for local files, remote storage, and mobile productivity",
      text:
        "If you want a smoother way to manage files, connect to servers, play media, review differences, and work with PDFs on iPhone or iPad, FilesApp is closer to a long-term workspace than a basic file shell. Start free, then decide whether rewarded access or membership fits your usage.",
      download: "Get it on the App Store",
      contact: "Contact Developer"
    },
    footer: {
      text: "A local and remote file manager built for iPhone and iPad.",
      download: "Download on App Store",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  }
};

function getValueByPath(source, path) {
  return path.split(".").reduce((current, part) => current?.[part], source);
}

function setLanguage(lang) {
  const bundle = translations[lang] || translations["zh-CN"];

  document.documentElement.lang = lang;
  document.title = bundle.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", bundle.meta.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = getValueByPath(bundle, key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".app-store-link").forEach((element) => {
    element.setAttribute("href", APP_STORE_URL);
  });

  const contactSubject = encodeURIComponent(lang === "zh-CN" ? CONTACT_SUBJECT_ZH : CONTACT_SUBJECT_EN);
  const contactURL = `mailto:${CONTACT_EMAIL}?subject=${contactSubject}`;

  document.querySelectorAll(".contact-link").forEach((element) => {
    element.setAttribute("href", contactURL);
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-lang-switch") === lang);
  });
}

function resolveInitialLanguage() {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language || "en"];

  return languages.some((language) => String(language).toLowerCase().startsWith("zh"))
    ? "zh-CN"
    : "en";
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.getAttribute("data-lang-switch"));
  });
});

document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }
    event.preventDefault();
    window.location.href = href;
  });
});

setLanguage(resolveInitialLanguage());
