(function () {
    var config = { attributes: false, childList: true, subtree: false };
    var oldLen = 0;
    var newLen = 0;
    var listObserver;
    var elementObserver;

    elementObserver = new MutationObserver(() => {
        newLen = document.getElementsByClassName("duplicates").length
        if (newLen === oldLen) {
            document.getElementsByClassName("duplicates")[0].firstChild.firstChild.click();
        }

    })

    listObserver = new MutationObserver(() => {
        if (document.getElementsByClassName("duplicates").length > 0) {
            oldLen = document.getElementsByClassName("duplicates").length;
            elementObserver.observe(document.getElementsByClassName("duplicates")[0], config)
            document.getElementsByClassName("duplicates")[0].firstChild.firstChild.click();
        } else {
            if (document.getElementById("loader-btn")) {
                document.getElementById("loader-btn").click();
            }
        }
    })

    listObserver.observe(document.getElementById("container"), config);
})()