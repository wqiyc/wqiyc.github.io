/**
 * GeekLab 主脚本
 * 包含：深色模式、商品渲染、下载工具渲染、模态框等
 */

// ========================================
// 初始化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initMobileMenu();
    renderDownloadTools();
    renderProducts();
    renderBlogList();
    initModals();
    initToolCards();
});

// ========================================
// 深色模式
// ========================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (root.getAttribute('data-theme') === 'dark') {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            } else {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
        });
    }
}

// ========================================
// 移动端菜单
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ========================================
// 下载工具数据
// ========================================
const downloadToolsData = [
    {
        name: "网络调试助手",
        version: "v3.0.1",
        size: "2.3 MB",
        desc: "TCP/UDP 调试工具，支持客户端/服务器模式",
        icon: "🌐",
        downloadUrl: "/downloads/NetAssist.exe",
        tutorialUrl: "/tutorial/net-assist.html"
    },
    {
        name: "串口调试助手",
        version: "v1.3.6",
        size: "1.8 MB",
        desc: "串口通信调试，支持多种波特率",
        icon: "🔌",
        downloadUrl: "/downloads/SerialDebug.exe",
        tutorialUrl: "/tutorial/serial-debug.html"
    },
    {
        name: "Modbus Poll",
        version: "v10.0.2",
        size: "4.2 MB",
        desc: "Modbus RTU/ASCII/TCP 主站调试工具",
        icon: "📡",
        downloadUrl: "/downloads/ModbusPoll.exe",
        tutorialUrl: "/tutorial/modbus-poll.html"
    },
    {
        name: "逻辑分析仪软件",
        version: "v2.0.16",
        size: "28 MB",
        desc: "Saleae Logic 兼容软件，支持多协议解析",
        icon: "📊",
        downloadUrl: "/downloads/LogicSetup.exe",
        tutorialUrl: "/tutorial/logic-analyzer.html"
    }
];

// ========================================
// 商品数据
// ========================================
const powerProductsData = [
    { name: "LM2596 降压模块", price: "9.90", desc: "输入4.5-40V，输出1.25-37V/3A", icon: "🔋" },
    { name: "MT3608 升压模块", price: "8.50", desc: "输入2-24V，输出5-28V/2A", icon: "⚡" },
    { name: "5V 2A 电源适配器", price: "19.90", desc: "USB接口，过流保护", icon: "🔌" },
    { name: "TP4056 充电模块", price: "6.50", desc: "1A锂电池充电板", icon: "🔋" },
    { name: "XL4015 大功率降压", price: "15.90", desc: "5A大电流，带数显", icon: "📊" },
    { name: "DC-DC 隔离电源", price: "28.00", desc: "1500V隔离，1W", icon: "🔒" }
];

const devProductsData = [
    { name: "USB转TTL (CH340)", price: "12.90", desc: "串口调试必备", icon: "🔌" },
    { name: "逻辑分析仪 24M", price: "89.00", desc: "8通道，支持各种协议", icon: "📈" },
    { name: "STM32核心板", price: "35.00", desc: "F103C8T6，带Type-C", icon: "💻" },
    { name: "OLED 0.96寸屏", price: "15.90", desc: "I2C接口，128x64", icon: "🖥️" },
    { name: "DS3231 时钟模块", price: "12.00", desc: "高精度RTC", icon: "⏰" },
    { name: "ESP8266 开发板", price: "18.90", desc: "WiFi模块，NodeMCU", icon: "📡" }
];

// ========================================
// 博客数据
// ========================================
const blogData = [
    { title: "常用 AI 工具比较分析", date: "2026-06-21", url: "/blog/posts/ai-debug-tools.html" },
    { title: "单片机网络不常见问题分析", date: "2026-06-21", url: "/blog/posts/mcu-network-issues.html" },
    { title: "树莓派学习笔记：安装 VSCode 编译程序", date: "2026-06-21", url: "/blog/posts/raspberry-pi-notes.html" }
];

// ========================================
// 渲染下载工具
// ========================================
function renderDownloadTools() {
    const container = document.getElementById('downloadTools');
    if (!container) return;
    
    container.innerHTML = downloadToolsData.map(tool => `
        <div class="download-card">
            <div class="download-icon">${tool.icon}</div>
            <div class="download-name">${tool.name}</div>
            <div class="download-version">${tool.version}</div>
            <div class="download-size">📦 ${tool.size}</div>
            <div class="download-desc">${tool.desc}</div>
            <div class="btn-group">
                <a href="${tool.downloadUrl}" class="download-btn" download>⬇️ 立即下载</a>
                <a href="${tool.tutorialUrl}" class="tutorial-btn">📖 使用教程</a>
            </div>
        </div>
    `).join('');
}

// ========================================
// 渲染商品
// ========================================
function renderProducts() {
    const powerContainer = document.getElementById('powerProducts');
    const devContainer = document.getElementById('devProducts');
    
    if (powerContainer) {
        powerContainer.innerHTML = powerProductsData.map(p => `
            <div class="product-card">
                <div class="product-img">${p.icon}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-price">¥${p.price} <small>起</small></div>
                <div style="font-size:0.75rem; color:var(--text-secondary)">${p.desc}</div>
                <button class="buy-btn" data-name="${p.name}" data-price="${p.price}">加入询价单</button>
            </div>
        `).join('');
    }
    
    if (devContainer) {
        devContainer.innerHTML = devProductsData.map(p => `
            <div class="product-card">
                <div class="product-img">${p.icon}</div>
                <div class="product-name">${p.name}</div>
                <div class="product-price">¥${p.price} <small>起</small></div>
                <div style="font-size:0.75rem; color:var(--text-secondary)">${p.desc}</div>
                <button class="buy-btn" data-name="${p.name}" data-price="${p.price}">加入询价单</button>
            </div>
        `).join('');
    }
    
    // 绑定询价按钮事件
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            const msgInput = document.getElementById('inquiryMsg');
            if (msgInput) {
                msgInput.value = `感兴趣商品：${name} (¥${price}起)\n数量：___\n需求：`;
            }
            openInquiryModal();
        });
    });
}

// ========================================
// 渲染博客列表
// ========================================
function renderBlogList() {
    const container = document.getElementById('blogList');
    if (!container) return;
    // 博客列表页有独立的分页逻辑，跳过首页渲染
    if (document.getElementById('pagination')) return;

    container.innerHTML = blogData.map(post => `
        <a href="${post.url}" class="blog-item">
            <span class="blog-title">${post.title}</span>
            <span class="blog-date">${post.date}</span>
        </a>
    `).join('');
}

// ========================================
// 模态框管理
// ========================================
function initModals() {
    // 询价弹窗
    const inquiryModal = document.getElementById('inquiryModal');
    const batchBtn = document.getElementById('batchInquiryBtn');
    const inquiryBtn = document.getElementById('inquiryBtn');
    const closeModal = document.getElementById('closeModal');
    const submitBtn = document.getElementById('submitInquiry');
    
    window.openInquiryModal = function() {
        if (inquiryModal) inquiryModal.style.display = 'flex';
    };
    
    if (batchBtn) batchBtn.addEventListener('click', openInquiryModal);
    if (inquiryBtn) inquiryBtn.addEventListener('click', (e) => { e.preventDefault(); openInquiryModal(); });
    if (closeModal) closeModal.addEventListener('click', () => { inquiryModal.style.display = 'none'; });
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const name = document.getElementById('inquiryName')?.value;
            const email = document.getElementById('inquiryEmail')?.value;
            const msg = document.getElementById('inquiryMsg')?.value;
            if (!name || !email || !msg) {
                alert('请填写完整信息');
                return;
            }
            alert(`询价已提交！我们会尽快联系您。`);
            inquiryModal.style.display = 'none';
            if (document.getElementById('inquiryName')) document.getElementById('inquiryName').value = '';
            if (document.getElementById('inquiryEmail')) document.getElementById('inquiryEmail').value = '';
            if (document.getElementById('inquiryMsg')) document.getElementById('inquiryMsg').value = '';
        });
    }
    
    // 打赏弹窗
    const donateModal = document.getElementById('donateModal');
    const wechatBtn = document.getElementById('wechatBtn');
    const alipayBtn = document.getElementById('alipayBtn');
    const closeDonate = document.getElementById('closeDonateModal');
    
    if (wechatBtn) {
        wechatBtn.addEventListener('click', () => {
            if (donateModal) donateModal.style.display = 'flex';
        });
    }
    if (alipayBtn) {
        alipayBtn.addEventListener('click', () => {
            if (donateModal) donateModal.style.display = 'flex';
        });
    }
    if (closeDonate) {
        closeDonate.addEventListener('click', () => {
            if (donateModal) donateModal.style.display = 'none';
        });
    }
    
    // 点击模态框背景关闭
    window.onclick = (e) => {
        if (e.target.classList && e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    };
}

function openInquiryModal() {
    const modal = document.getElementById('inquiryModal');
    if (modal) modal.style.display = 'flex';
}

// ========================================
// 工具卡片提示
// ========================================
function initToolCards() {
    // 注意：工具页面已经独立开发，这里的提示仅用于未完成的工具
    // 如果有独立的工具页面，不需要这个提示
}

// ========================================
// 导出工具函数（供其他页面使用）
// ========================================
window.GeekLab = {
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('已复制到剪贴板');
        }).catch(() => {
            alert('复制失败');
        });
    },
    showError: function(message) {
        alert(message);
    }
};