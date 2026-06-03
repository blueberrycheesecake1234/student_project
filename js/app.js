document.addEventListener("DOMContentLoaded", function () {
    const mapStatus = document.getElementById("mapStatus");
    const itemList = document.getElementById("recentItems");
    const today = new Date();

    if (mapStatus) {
        mapStatus.textContent = "분실물 지도 로딩 중입니다...";
        setTimeout(() => {
            mapStatus.textContent = "학교 구역에서 분실물을 확인하려면 지도를 클릭하세요. 현재는 샘플 보기 모드입니다.";
        }, 900);
    }

    if (itemList) {
        const items = [
            { name: "빨간색 우산", location: "도서관 앞" },
            { name: "검은색 백팩", location: "체육관 옆" },
            { name: "노란색 필통", location: "교실 201" }
        ];

        itemList.innerHTML = items
            .map(item => `<li><strong>${item.name}</strong><br><span>${item.location}</span></li>`)
            .join("");
    }

    const dateLabel = document.getElementById("currentDate");
    if (dateLabel) {
        dateLabel.textContent = today.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
});
