// 二手教材交易平台 - JavaScript应用逻辑

// 模拟数据
const mockData = {
    books: [
        {
            id: 1,
            title: '数据结构与算法分析',
            author: 'Mark Allen Weiss',
            publisher: '机械工业出版社',
            edition: '第7版',
            publishYear: 2021,
            originalPrice: 79.8,
            sellPrice: 35,
            condition: '九成新',
            hasNotes: true,
            university: '北京大学',
            major: '计算机科学',
            course: '数据结构',
            location: '北京大学东门',
            seller: '张明',
            contact: '138****8888',
            tradeMethods: ['自提', '跑腿'],
            isbn: '9787111643654',
            status: 'active',
            coverImage: null
        },
        {
            id: 2,
            title: '高等数学（上册）',
            author: '同济大学数学系',
            publisher: '高等教育出版社',
            edition: '第7版',
            publishYear: 2014,
            originalPrice: 48.5,
            sellPrice: 20,
            condition: '八成新',
            hasNotes: false,
            university: '清华大学',
            major: '计算机科学',
            course: '高等数学',
            location: '清华大学西门',
            seller: '李华',
            contact: '139****9999',
            tradeMethods: ['自提'],
            isbn: '9787040396638',
            status: 'active',
            coverImage: null
        },
        {
            id: 3,
            title: 'C++ Primer Plus',
            author: 'Stephen Prata',
            publisher: '人民邮电出版社',
            edition: '第6版',
            publishYear: 2020,
            originalPrice: 89.0,
            sellPrice: 40,
            condition: '全新',
            hasNotes: false,
            university: '复旦大学',
            major: '计算机科学',
            course: 'C++程序设计',
            location: '复旦大学光华楼',
            seller: '王芳',
            contact: '137****7777',
            tradeMethods: ['自提', '跑腿'],
            isbn: '9787115521637',
            status: 'active',
            coverImage: null
        },
        {
            id: 4,
            title: '宏观经济学',
            author: '曼昆',
            publisher: '北京大学出版社',
            edition: '第9版',
            publishYear: 2019,
            originalPrice: 72.0,
            sellPrice: 30,
            condition: '七成新',
            hasNotes: true,
            university: '上海交通大学',
            major: '金融学',
            course: '宏观经济学',
            location: '上海交通大学闵行校区',
            seller: '陈伟',
            contact: '136****6666',
            tradeMethods: ['跑腿'],
            isbn: '9787301294864',
            status: 'active',
            coverImage: null
        },
        {
            id: 5,
            title: '物理学原理',
            author: 'Serway',
            publisher: '清华大学出版社',
            edition: '第10版',
            publishYear: 2018,
            originalPrice: 98.0,
            sellPrice: 45,
            condition: '九成新',
            hasNotes: false,
            university: '浙江大学',
            major: '机械工程',
            course: '大学物理',
            location: '浙江大学紫金港校区',
            seller: '刘洋',
            contact: '135****5555',
            tradeMethods: ['自提', '跑腿'],
            isbn: '9787302495670',
            status: 'active',
            coverImage: null
        },
        {
            id: 6,
            title: '内科学',
            author: '葛均波',
            publisher: '人民卫生出版社',
            edition: '第9版',
            publishYear: 2018,
            originalPrice: 89.0,
            sellPrice: 42,
            condition: '八成新',
            hasNotes: true,
            university: '复旦大学',
            major: '临床医学',
            course: '内科学',
            location: '复旦大学上海医学院',
            seller: '赵医生',
            contact: '134****4444',
            tradeMethods: ['自提'],
            isbn: '9787117265416',
            status: 'active',
            coverImage: null
        }
    ],
    myBooks: [
        {
            id: 101,
            title: '数据结构与算法分析',
            author: 'Mark Allen Weiss',
            condition: '九成新',
            sellPrice: 35,
            originalPrice: 79.8,
            status: 'active',
            publishDate: '2024-01-15',
            coverImage: null
        },
        {
            id: 102,
            title: 'C++ Primer Plus',
            author: 'Stephen Prata',
            condition: '全新',
            sellPrice: 40,
            originalPrice: 89.0,
            status: 'sold',
            publishDate: '2024-01-10',
            soldDate: '2024-01-20',
            coverImage: null
        },
        {
            id: 103,
            title: '高等数学（下册）',
            author: '同济大学数学系',
            condition: '七成新',
            sellPrice: 18,
            originalPrice: 48.5,
            status: 'donated',
            publishDate: '2023-12-20',
            donatedDate: '2024-01-25',
            coverImage: null
        }
    ],
    orders: [
        {
            id: 'ORD20240120001',
            bookTitle: 'C++ Primer Plus',
            sellerName: '王芳',
            sellerUniversity: '复旦大学',
            price: 40,
            status: 'completed',
            orderDate: '2024-01-20',
            tradeMethod: '自提'
        },
        {
            id: 'ORD20240118002',
            bookTitle: '数据结构与算法分析',
            sellerName: '张明',
            sellerUniversity: '北京大学',
            price: 35,
            status: 'pending',
            orderDate: '2024-01-18',
            tradeMethod: '跑腿'
        },
        {
            id: 'ORD20240110003',
            bookTitle: '高等数学（上册）',
            sellerName: '李华',
            sellerUniversity: '清华大学',
            price: 20,
            status: 'cancelled',
            orderDate: '2024-01-10',
            tradeMethod: '自提'
        }
    ],
    isbnDatabase: {
        '9787111643654': {
            title: '数据结构与算法分析',
            author: 'Mark Allen Weiss',
            publisher: '机械工业出版社',
            edition: '第7版',
            publishYear: 2021,
            originalPrice: 79.8,
            course: '数据结构',
            major: '计算机科学'
        },
        '9787040396638': {
            title: '高等数学（上册）',
            author: '同济大学数学系',
            publisher: '高等教育出版社',
            edition: '第7版',
            publishYear: 2014,
            originalPrice: 48.5,
            course: '高等数学',
            major: '计算机科学'
        },
        '9787115521637': {
            title: 'C++ Primer Plus',
            author: 'Stephen Prata',
            publisher: '人民邮电出版社',
            edition: '第6版',
            publishYear: 2020,
            originalPrice: 89.0,
            course: 'C++程序设计',
            major: '计算机科学'
        }
    }
};

// 当前状态
let currentPage = 'home';
let filteredBooks = [...mockData.books];
let selectedBooksForDonate = [];
let nextBookId = 7;
let nextMyBookId = 104;
let uploadedCoverImage = null;

// DOM元素
const elements = {
    // 页面
    homePage: document.getElementById('home-page'),
    publishPage: document.getElementById('publish-page'),
    profilePage: document.getElementById('profile-page'),
    
    // 导航
    navItems: document.querySelectorAll('.nav-item'),
    
    // 首页
    booksList: document.getElementById('books-list'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    filterBtn: document.getElementById('filter-btn'),
    filterPanel: document.getElementById('filter-panel'),
    resetFilter: document.getElementById('reset-filter'),
    applyFilter: document.getElementById('apply-filter'),
    filterUniversity: document.getElementById('filter-university'),
    filterMajor: document.getElementById('filter-major'),
    minPrice: document.getElementById('min-price'),
    maxPrice: document.getElementById('max-price'),
    
    // 发布页面
    coverUpload: document.getElementById('cover-upload'),
    coverInput: document.getElementById('cover-input'),
    isbnInput: document.getElementById('isbn-input'),
    matchIsbn: document.getElementById('match-isbn'),
    matchResult: document.getElementById('match-result'),
    bookName: document.getElementById('book-name'),
    author: document.getElementById('author'),
    publisher: document.getElementById('publisher'),
    edition: document.getElementById('edition'),
    publishYear: document.getElementById('publish-year'),
    publishUniversity: document.getElementById('publish-university'),
    publishMajor: document.getElementById('publish-major'),
    courseName: document.getElementById('course-name'),
    originalPrice: document.getElementById('original-price'),
    sellPrice: document.getElementById('sell-price'),
    tradeSelf: document.getElementById('trade-self'),
    tradeRun: document.getElementById('trade-run'),
    pickupLocation: document.getElementById('pickup-location'),
    contact: document.getElementById('contact'),
    cancelPublish: document.getElementById('cancel-publish'),
    submitPublish: document.getElementById('submit-publish'),
    
    // 我的页面
    menuOrders: document.getElementById('menu-orders'),
    menuPublished: document.getElementById('menu-published'),
    menuDonate: document.getElementById('menu-donate'),
    myPublished: document.getElementById('my-published'),
    myOrders: document.getElementById('my-orders'),
    donateSection: document.getElementById('donate-section'),
    myBooksList: document.getElementById('my-books-list'),
    ordersList: document.getElementById('orders-list'),
    donateBooksList: document.getElementById('donate-books-list'),
    donateMessage: document.getElementById('donate-message'),
    backFromPublished: document.getElementById('back-from-published'),
    backFromOrders: document.getElementById('back-from-orders'),
    backFromDonate: document.getElementById('back-from-donate'),
    cancelDonate: document.getElementById('cancel-donate'),
    submitDonate: document.getElementById('submit-donate'),
    
    // 教材详情弹窗
    modal: document.getElementById('book-detail-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    closeModal: document.getElementById('close-modal'),
    contactSeller: document.getElementById('contact-seller'),
    
    // Toast 消息提示
    toastModal: document.getElementById('toast-modal'),
    toastIcon: document.getElementById('toast-icon'),
    toastMessage: document.getElementById('toast-message'),
    
    // 确认弹窗
    confirmModal: document.getElementById('confirm-modal'),
    confirmTitle: document.getElementById('confirm-title'),
    confirmMessage: document.getElementById('confirm-message'),
    confirmCancel: document.getElementById('confirm-cancel'),
    confirmOk: document.getElementById('confirm-ok'),
    confirmOverlay: document.querySelector('.confirm-overlay')
};

// 确认弹窗回调
let confirmCallback = null;

// ==================== 自定义弹窗函数 ====================

// Toast 消息提示
function showToast(message, type = 'success') {
    // 设置图标
    let iconSvg = '';
    switch (type) {
        case 'success':
            iconSvg = '<polyline points="20 6 9 17 4 12"></polyline>';
            elements.toastIcon.className = 'toast-icon success';
            break;
        case 'error':
            iconSvg = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
            elements.toastIcon.className = 'toast-icon error';
            break;
        case 'warning':
            iconSvg = '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>';
            elements.toastIcon.className = 'toast-icon warning';
            break;
    }
    
    elements.toastIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${iconSvg}</svg>`;
    elements.toastMessage.textContent = message;
    elements.toastModal.classList.remove('hidden');
    
    // 2秒后自动关闭
    setTimeout(() => {
        elements.toastModal.classList.add('hidden');
    }, 2000);
}

// 确认弹窗
function showConfirm(title, message, callback, options = {}) {
    elements.confirmTitle.textContent = title;
    elements.confirmMessage.textContent = message;
    confirmCallback = callback;
    
    // 设置按钮样式
    const okBtn = elements.confirmOk;
    if (options.danger) {
        okBtn.className = 'confirm-btn primary danger';
    } else {
        okBtn.className = 'confirm-btn primary';
    }
    
    // 设置确认按钮文字
    okBtn.textContent = options.okText || '确认';
    elements.confirmCancel.textContent = options.cancelText || '取消';
    
    elements.confirmModal.classList.remove('hidden');
}

function closeConfirm() {
    elements.confirmModal.classList.add('hidden');
    confirmCallback = null;
}

// ==================== 图片上传预览功能 ====================

function setupImageUpload() {
    const uploadArea = elements.coverUpload;
    const fileInput = elements.coverInput;
    
    // 点击上传
    uploadArea.addEventListener('click', (e) => {
        if (e.target.closest('.upload-remove')) return;
        fileInput.click();
    });
    
    // 文件选择
    fileInput.addEventListener('change', handleFileSelect);
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            handleImageFile(files[0]);
        }
    });
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImageFile(file);
    }
}

function handleImageFile(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        uploadedCoverImage = e.target.result;
        displayUploadedImage(uploadedCoverImage);
    };
    
    reader.readAsDataURL(file);
}

function displayUploadedImage(imageData) {
    const uploadArea = elements.coverUpload;
    
    // 移除已有的预览
    const existingPreview = uploadArea.querySelector('.upload-preview');
    if (existingPreview) existingPreview.remove();
    const existingRemove = uploadArea.querySelector('.upload-remove');
    if (existingRemove) existingRemove.remove();
    
    // 创建预览图片
    const img = document.createElement('img');
    img.className = 'upload-preview';
    img.src = imageData;
    
    // 创建删除按钮
    const removeBtn = document.createElement('button');
    removeBtn.className = 'upload-remove';
    removeBtn.type = 'button';
    removeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;
    
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeUploadedImage();
    });
    
    uploadArea.appendChild(img);
    uploadArea.appendChild(removeBtn);
    uploadArea.classList.add('has-image');
    
    // 隐藏占位符
    const placeholder = uploadArea.querySelector('.upload-placeholder');
    if (placeholder) {
        placeholder.style.display = 'none';
    }
}

function removeUploadedImage() {
    const uploadArea = elements.coverUpload;
    uploadedCoverImage = null;
    
    // 移除预览和删除按钮
    const preview = uploadArea.querySelector('.upload-preview');
    if (preview) preview.remove();
    const removeBtn = uploadArea.querySelector('.upload-remove');
    if (removeBtn) removeBtn.remove();
    
    uploadArea.classList.remove('has-image');
    
    // 显示占位符
    const placeholder = uploadArea.querySelector('.upload-placeholder');
    if (placeholder) {
        placeholder.style.display = 'block';
    }
    
    // 重置文件输入
    elements.coverInput.value = '';
}

// ==================== 初始化 ====================

function init() {
    setupNavigation();
    setupImageUpload();
    setupConfirmListeners();
    renderBooksList();
    setupEventListeners();
}

function setupConfirmListeners() {
    elements.confirmCancel.addEventListener('click', closeConfirm);
    elements.confirmOverlay.addEventListener('click', closeConfirm);
    elements.confirmOk.addEventListener('click', () => {
        if (confirmCallback) {
            confirmCallback();
        }
        closeConfirm();
    });
}

// ==================== 导航功能 ====================

function setupNavigation() {
    elements.navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            switchPage(page);
        });
    });
}

function switchPage(page) {
    currentPage = page;
    
    // 更新页面显示
    elements.homePage.classList.remove('active');
    elements.publishPage.classList.remove('active');
    elements.profilePage.classList.remove('active');
    
    document.getElementById(`${page}-page`).classList.add('active');
    
    // 更新导航状态
    elements.navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // 重置我的页面子视图
    if (page === 'profile') {
        showProfileMain();
    }
    
    // 进入发布页面时重置上传
    if (page === 'publish') {
        resetPublishForm();
    }
}

// ==================== 首页功能 ====================

function renderBooksList() {
    if (filteredBooks.length === 0) {
        elements.booksList.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                </div>
                <p class="empty-text">暂无符合条件的教材</p>
            </div>
        `;
        return;
    }
    
    elements.booksList.innerHTML = filteredBooks.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-card-image">
                ${book.coverImage ? 
                    `<img src="${book.coverImage}" alt="${book.title}" class="upload-preview" style="position: static; width: 100%; height: 100%;">` :
                    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                    </svg>`
                }
            </div>
            ${book.hasNotes ? '<span class="book-card-badge notes">有笔记</span>' : ''}
            <div class="book-card-content">
                <h3 class="book-card-title">${book.title}</h3>
                <div class="book-card-meta">
                    <span class="book-card-tag">${book.university}</span>
                    <span class="book-card-condition">${book.condition}</span>
                </div>
                <div class="book-card-bottom">
                    <div class="book-card-price">
                        <span class="price-current">¥${book.sellPrice}</span>
                        <span class="price-original">¥${book.originalPrice}</span>
                    </div>
                    <div class="book-card-location">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${book.university}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // 绑定卡片点击事件
    document.querySelectorAll('.book-card').forEach(card => {
        card.addEventListener('click', () => {
            const bookId = parseInt(card.dataset.id);
            showBookDetail(bookId);
        });
    });
}

function showBookDetail(bookId) {
    const book = mockData.books.find(b => b.id === bookId);
    if (!book) return;
    
    elements.modalTitle.textContent = book.title;
    elements.modalBody.innerHTML = `
        <div class="detail-image">
            ${book.coverImage ? 
                `<img src="${book.coverImage}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">` :
                `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                </svg>`
            }
        </div>
        <div class="detail-price">
            <span class="detail-price-current">¥${book.sellPrice}</span>
            <span class="detail-price-original">原价 ¥${book.originalPrice}</span>
        </div>
        <div class="detail-tags">
            <span class="detail-tag condition">${book.condition}</span>
            ${book.hasNotes ? '<span class="detail-tag notes">含笔记</span>' : ''}
            <span class="detail-tag">${book.major}</span>
            <span class="detail-tag">${book.course}</span>
        </div>
        <div class="detail-section">
            <h4 class="detail-section-title">教材信息</h4>
            <div class="detail-info-grid">
                <div class="detail-info-item">
                    <span class="detail-info-label">作者</span>
                    <span class="detail-info-value">${book.author}</span>
                </div>
                <div class="detail-info-item">
                    <span class="detail-info-label">出版社</span>
                    <span class="detail-info-value">${book.publisher}</span>
                </div>
                <div class="detail-info-item">
                    <span class="detail-info-label">版本</span>
                    <span class="detail-info-value">${book.edition}</span>
                </div>
                <div class="detail-info-item">
                    <span class="detail-info-label">出版年份</span>
                    <span class="detail-info-value">${book.publishYear}</span>
                </div>
                <div class="detail-info-item">
                    <span class="detail-info-label">ISBN</span>
                    <span class="detail-info-value">${book.isbn}</span>
                </div>
                <div class="detail-info-item">
                    <span class="detail-info-label">交易方式</span>
                    <span class="detail-info-value">${book.tradeMethods.join('、')}</span>
                </div>
            </div>
        </div>
        <div class="detail-section">
            <h4 class="detail-section-title">卖家信息</h4>
            <div class="detail-seller">
                <div class="detail-seller-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div class="detail-seller-info">
                    <div class="detail-seller-name">${book.seller}</div>
                    <div class="detail-seller-location">
                        ${book.university} · ${book.location}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    elements.modal.classList.remove('hidden');
}

function closeBookDetail() {
    elements.modal.classList.add('hidden');
}

// ==================== 搜索和筛选功能 ====================

function performSearch() {
    const keyword = elements.searchInput.value.trim().toLowerCase();
    
    if (!keyword) {
        filteredBooks = [...mockData.books];
    } else {
        filteredBooks = mockData.books.filter(book => 
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword) ||
            book.course.toLowerCase().includes(keyword) ||
            book.isbn.includes(keyword)
        );
    }
    
    renderBooksList();
    
    if (filteredBooks.length === 0 && keyword) {
        showToast('未找到相关教材', 'warning');
    }
}

function toggleFilterPanel() {
    elements.filterPanel.classList.toggle('hidden');
}

function applyFilters() {
    const university = elements.filterUniversity.value;
    const major = elements.filterMajor.value;
    const minPriceVal = elements.minPrice.value ? parseFloat(elements.minPrice.value) : 0;
    const maxPriceVal = elements.maxPrice.value ? parseFloat(elements.maxPrice.value) : Infinity;
    
    // 获取选中的新旧程度
    const conditionCheckboxes = elements.filterPanel.querySelectorAll('input[type="checkbox"]:checked');
    const selectedConditions = Array.from(conditionCheckboxes).map(cb => cb.value);
    
    filteredBooks = mockData.books.filter(book => {
        if (university && book.university !== university) return false;
        if (major && book.major !== major) return false;
        if (book.sellPrice < minPriceVal || book.sellPrice > maxPriceVal) return false;
        if (selectedConditions.length > 0 && !selectedConditions.includes(book.condition)) return false;
        return true;
    });
    
    renderBooksList();
    elements.filterPanel.classList.add('hidden');
    
    showToast(`找到 ${filteredBooks.length} 本教材`, 'success');
}

function resetFilters() {
    elements.filterUniversity.value = '';
    elements.filterMajor.value = '';
    elements.minPrice.value = '';
    elements.maxPrice.value = '';
    
    // 清除所有复选框
    elements.filterPanel.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    filteredBooks = [...mockData.books];
    renderBooksList();
    elements.filterPanel.classList.add('hidden');
    
    showToast('已重置筛选条件', 'success');
}

// ==================== 发布页面功能 ====================

function matchIsbnCode() {
    const isbn = elements.isbnInput.value.trim();
    
    if (!isbn) {
        showToast('请输入ISBN码', 'warning');
        return;
    }
    
    // 模拟ISBN查询延迟
    elements.matchIsbn.textContent = '匹配中...';
    elements.matchIsbn.disabled = true;
    
    setTimeout(() => {
        const bookInfo = mockData.isbnDatabase[isbn];
        
        if (bookInfo) {
            // 自动填充表单
            elements.bookName.value = bookInfo.title;
            elements.author.value = bookInfo.author;
            elements.publisher.value = bookInfo.publisher;
            elements.edition.value = bookInfo.edition;
            elements.publishYear.value = bookInfo.publishYear;
            elements.originalPrice.value = bookInfo.originalPrice;
            elements.courseName.value = bookInfo.course;
            elements.publishMajor.value = bookInfo.major;
            
            showMatchResult(`匹配成功：${bookInfo.title}`, true);
            showToast('ISBN匹配成功，已自动填充信息', 'success');
        } else {
            showMatchResult('未找到对应教材信息，请手动填写', false);
            showToast('未找到对应ISBN信息', 'warning');
        }
        
        elements.matchIsbn.textContent = '自动匹配';
        elements.matchIsbn.disabled = false;
    }, 800);
}

function showMatchResult(message, success) {
    elements.matchResult.textContent = message;
    elements.matchResult.classList.remove('hidden');
    
    if (!success) {
        elements.matchResult.style.background = 'var(--kurenai)';
    } else {
        elements.matchResult.style.background = 'var(--matcha)';
    }
}

function validatePrice() {
    const original = parseFloat(elements.originalPrice.value) || 0;
    const sell = parseFloat(elements.sellPrice.value) || 0;
    
    // 价格上限：原价的50%
    const maxAllowed = original * 0.5;
    
    if (sell > maxAllowed && original > 0) {
        showConfirm(
            '价格超出上限',
            `建议售价不超过原价的50%（¥${maxAllowed.toFixed(1)}）。是否自动调整价格？`,
            () => {
                elements.sellPrice.value = maxAllowed.toFixed(1);
                showToast('已自动调整价格', 'success');
            },
            { okText: '自动调整', cancelText: '保持不变' }
        );
    }
}

function submitPublishForm() {
    // 表单验证
    const bookName = elements.bookName.value.trim();
    const sellPrice = elements.sellPrice.value;
    const condition = document.querySelector('input[name="condition"]:checked');
    
    if (!bookName) {
        showToast('请填写教材名称', 'error');
        return;
    }
    
    if (!sellPrice) {
        showToast('请填写售价', 'error');
        return;
    }
    
    if (!condition) {
        showToast('请选择新旧程度', 'error');
        return;
    }
    
    // 收集交易方式
    const tradeMethods = [];
    if (elements.tradeSelf.checked) tradeMethods.push('自提');
    if (elements.tradeRun.checked) tradeMethods.push('跑腿');
    
    // 获取是否有笔记
    const hasNotesRadio = document.querySelector('input[name="has-notes"]:checked');
    const hasNotes = hasNotesRadio ? hasNotesRadio.value === 'true' : false;
    
    // 获取当前日期
    const today = new Date().toISOString().split('T')[0];
    
    // 创建新教材对象
    const newBook = {
        id: nextBookId++,
        title: bookName,
        author: elements.author.value.trim() || '未知',
        publisher: elements.publisher.value.trim() || '未知',
        edition: elements.edition.value.trim() || '未知',
        publishYear: elements.publishYear.value ? parseInt(elements.publishYear.value) : new Date().getFullYear(),
        originalPrice: elements.originalPrice.value ? parseFloat(elements.originalPrice.value) : parseFloat(sellPrice) * 2,
        sellPrice: parseFloat(sellPrice),
        condition: condition.value,
        hasNotes: hasNotes,
        university: elements.publishUniversity.value || '北京大学',
        major: elements.publishMajor.value || '计算机科学',
        course: elements.courseName.value.trim() || '未知课程',
        location: elements.pickupLocation.value.trim() || '校园内',
        seller: '书物用户',
        contact: elements.contact.value.trim() || '未提供',
        tradeMethods: tradeMethods.length > 0 ? tradeMethods : ['自提'],
        isbn: elements.isbnInput.value.trim() || '未知',
        status: 'active',
        coverImage: uploadedCoverImage
    };
    
    // 创建我的发布记录
    const myNewBook = {
        id: nextMyBookId++,
        title: bookName,
        author: elements.author.value.trim() || '未知',
        condition: condition.value,
        sellPrice: parseFloat(sellPrice),
        originalPrice: elements.originalPrice.value ? parseFloat(elements.originalPrice.value) : parseFloat(sellPrice) * 2,
        status: 'active',
        publishDate: today,
        coverImage: uploadedCoverImage
    };
    
    // 添加到数据中
    mockData.books.unshift(newBook);
    mockData.myBooks.unshift(myNewBook);
    filteredBooks = [...mockData.books];
    
    // 重新渲染
    renderBooksList();
    
    // 显示成功提示
    showToast('发布成功！您的教材已上架', 'success');
    
    // 重置表单
    resetPublishForm();
    
    // 延迟后返回首页
    setTimeout(() => {
        switchPage('home');
    }, 1500);
}

function resetPublishForm() {
    elements.isbnInput.value = '';
    elements.bookName.value = '';
    elements.author.value = '';
    elements.publisher.value = '';
    elements.edition.value = '';
    elements.publishYear.value = '';
    elements.publishUniversity.value = '';
    elements.publishMajor.value = '';
    elements.courseName.value = '';
    elements.originalPrice.value = '';
    elements.sellPrice.value = '';
    elements.pickupLocation.value = '';
    elements.contact.value = '';
    elements.tradeSelf.checked = false;
    elements.tradeRun.checked = false;
    elements.matchResult.classList.add('hidden');
    
    // 清除单选按钮
    document.querySelectorAll('input[name="condition"]').forEach(radio => {
        radio.checked = false;
    });
    document.querySelectorAll('input[name="has-notes"]').forEach(radio => {
        radio.checked = false;
    });
    
    // 清除上传的图片
    removeUploadedImage();
}

// ==================== 我的页面功能 ====================

function showProfileMain() {
    // 重新获取菜单区域元素
    const menuSection = elements.profilePage.querySelector('.menu-section');
    if (menuSection) {
        menuSection.style.display = 'block';
    }
    elements.myPublished.classList.add('hidden');
    elements.myOrders.classList.add('hidden');
    elements.donateSection.classList.add('hidden');
}

function showMyPublished() {
    // 重新获取菜单区域元素
    const menuSection = elements.profilePage.querySelector('.menu-section');
    if (menuSection) {
        menuSection.style.display = 'none';
    }
    elements.myPublished.classList.remove('hidden');
    elements.myOrders.classList.add('hidden');
    elements.donateSection.classList.add('hidden');
    renderMyBooksList();
}

function showMyOrders() {
    // 重新获取菜单区域元素
    const menuSection = elements.profilePage.querySelector('.menu-section');
    if (menuSection) {
        menuSection.style.display = 'none';
    }
    elements.myPublished.classList.add('hidden');
    elements.myOrders.classList.remove('hidden');
    elements.donateSection.classList.add('hidden');
    renderOrdersList();
}

function showDonateSection() {
    // 重新获取菜单区域元素
    const menuSection = elements.profilePage.querySelector('.menu-section');
    if (menuSection) {
        menuSection.style.display = 'none';
    }
    elements.myPublished.classList.add('hidden');
    elements.myOrders.classList.add('hidden');
    elements.donateSection.classList.remove('hidden');
    renderDonateBooksList();
}

function renderMyBooksList() {
    if (mockData.myBooks.length === 0) {
        elements.myBooksList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                    </svg>
                </div>
                <p class="empty-text">暂无发布记录</p>
            </div>
        `;
        return;
    }
    
    elements.myBooksList.innerHTML = mockData.myBooks.map(book => `
        <div class="my-book-item">
            <div class="my-book-image">
                ${book.coverImage ? 
                    `<img src="${book.coverImage}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` :
                    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                    </svg>`
                }
            </div>
            <div class="my-book-info">
                <div>
                    <h4 class="my-book-title">${book.title}</h4>
                    <div class="my-book-meta">
                        <span class="my-book-tag">${book.condition}</span>
                        <span class="my-book-tag">发布于 ${book.publishDate}</span>
                    </div>
                </div>
                <div class="my-book-bottom">
                    <span class="my-book-price">¥${book.sellPrice}</span>
                    <span class="my-book-status ${book.status}">${getStatusText(book.status)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function getStatusText(status) {
    const statusMap = {
        'active': '发布中',
        'sold': '已售出',
        'donated': '已捐赠'
    };
    return statusMap[status] || status;
}

function renderOrdersList() {
    if (mockData.orders.length === 0) {
        elements.ordersList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                    </svg>
                </div>
                <p class="empty-text">暂无订单记录</p>
            </div>
        `;
        return;
    }
    
    elements.ordersList.innerHTML = mockData.orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <span class="order-number">订单号：${order.id}</span>
                <span class="order-status ${order.status}">${getOrderStatusText(order.status)}</span>
            </div>
            <div class="order-content">
                <div class="order-book-image">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                    </svg>
                </div>
                <div class="order-book-info">
                    <h4 class="order-book-title">${order.bookTitle}</h4>
                    <p class="order-book-seller">卖家：${order.sellerName}（${order.sellerUniversity}）</p>
                    <div class="order-price">
                        ¥${order.price}
                        <span style="font-size: 12px; opacity: 0.6; margin-left: 8px;">${order.tradeMethod} · ${order.orderDate}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getOrderStatusText(status) {
    const statusMap = {
        'pending': '待确认',
        'completed': '已完成',
        'cancelled': '已取消'
    };
    return statusMap[status] || status;
}

function renderDonateBooksList() {
    const activeBooks = mockData.myBooks.filter(book => book.status === 'active');
    
    if (activeBooks.length === 0) {
        elements.donateBooksList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                    </svg>
                </div>
                <p class="empty-text">暂无可捐赠的教材</p>
            </div>
        `;
        return;
    }
    
    elements.donateBooksList.innerHTML = activeBooks.map(book => `
        <div class="donate-book-item">
            <input type="checkbox" value="${book.id}" class="donate-checkbox">
            <div class="donate-book-info">
                <h4 class="donate-book-title">${book.title}</h4>
                <p class="donate-book-meta">${book.condition} · 售价 ¥${book.sellPrice}</p>
            </div>
        </div>
    `).join('');
    
    // 绑定复选框事件
    document.querySelectorAll('.donate-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedDonateBooks);
    });
}

function updateSelectedDonateBooks() {
    selectedBooksForDonate = Array.from(
        document.querySelectorAll('.donate-checkbox:checked')
    ).map(cb => parseInt(cb.value));
}

function submitDonation() {
    if (selectedBooksForDonate.length === 0) {
        showToast('请选择要捐赠的教材', 'warning');
        return;
    }
    
    const donateType = document.querySelector('input[name="donate-type"]:checked');
    if (!donateType) {
        showToast('请选择捐赠方式', 'warning');
        return;
    }
    
    showConfirm(
        '确认捐赠',
        `您将捐赠 ${selectedBooksForDonate.length} 本教材。确认后将无法撤销此操作。`,
        () => {
            // 更新模拟数据
            selectedBooksForDonate.forEach(id => {
                const book = mockData.myBooks.find(b => b.id === id);
                if (book) {
                    book.status = 'donated';
                    book.donatedDate = new Date().toISOString().split('T')[0];
                }
            });
            
            // 重置
            selectedBooksForDonate = [];
            elements.donateMessage.value = '';
            
            showToast(`感谢您的爱心捐赠！已成功捐赠 ${selectedBooksForDonate.length > 0 ? selectedBooksForDonate.length : '0'} 本教材。`, 'success');
            
            // 返回我的页面
            setTimeout(() => {
                showProfileMain();
            }, 1500);
        },
        { danger: true, okText: '确认捐赠' }
    );
}

// ==================== 事件监听器设置 ====================

function setupEventListeners() {
    // 首页搜索
    elements.searchBtn.addEventListener('click', performSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // 筛选
    elements.filterBtn.addEventListener('click', toggleFilterPanel);
    elements.applyFilter.addEventListener('click', applyFilters);
    elements.resetFilter.addEventListener('click', resetFilters);
    
    // 发布页面
    elements.matchIsbn.addEventListener('click', matchIsbnCode);
    elements.sellPrice.addEventListener('blur', validatePrice);
    elements.originalPrice.addEventListener('blur', () => {
        // 当原价变化时，清空售价提示
        if (elements.sellPrice.value) {
            validatePrice();
        }
    });
    elements.cancelPublish.addEventListener('click', resetPublishForm);
    elements.submitPublish.addEventListener('click', submitPublishForm);
    
    // 我的页面
    elements.menuOrders.addEventListener('click', showMyOrders);
    elements.menuPublished.addEventListener('click', showMyPublished);
    elements.menuDonate.addEventListener('click', showDonateSection);
    elements.backFromPublished.addEventListener('click', showProfileMain);
    elements.backFromOrders.addEventListener('click', showProfileMain);
    elements.backFromDonate.addEventListener('click', showProfileMain);
    elements.cancelDonate.addEventListener('click', showProfileMain);
    elements.submitDonate.addEventListener('click', submitDonation);
    
    // 弹窗
    elements.closeModal.addEventListener('click', closeBookDetail);
    document.querySelector('.modal-overlay').addEventListener('click', closeBookDetail);
    elements.contactSeller.addEventListener('click', () => {
        showToast('已复制卖家联系方式到剪贴板', 'success');
    });
}

// ==================== 页面加载完成后初始化 ====================

document.addEventListener('DOMContentLoaded', init);