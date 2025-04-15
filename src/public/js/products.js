console.log("Products frontend javascript file");

$(function () {
    $(".product-collection").on("change", () => {
        const selectedValue = $(".product-collection").val();
        if (selectedValue === "DRINK") {
            $("#product-collection").hide();
            $("#product-volume").show();
        } else {
            $("#product-volume").hide();
            $("#product-collection").show();
        }
    });

    $("#process-btn").on("click", () => {
        $(".dish-container").slideToggle(500);
        $("#process-btn").css("display", "none")
    });

    $("#cancel-btn").on("click", () => {
        $(".dish-container").slideToggle(100);
        $("#process-btn").css("display", "flex")
    });

    $(".new-product-status").on("change", async function (e) {
        const id = e.target.id,
            productStatus = $(`#${id}.new-product-status`).val();

        try {
            const response = await axios.post(`/admin/product/${id}`, {
                productStatus: productStatus,
            });
            console.log("response:", response);
            const result = response.data;
            if (result.data) {
                $(".new-product-status").blur();
            } else alert("Product update failed!");
        } catch (err) {
            console.log(err);
            alert("Product update failed!");
        }
    });
});

function validateForm() {
    const productName = $(".product-name").val(),
        productPrice = $(".product-price").val(),
        productLeftCount = $(".product-left-count").val(),
        productCollection = $(".product-collection").val(),
        productDesc = $(".product-desc").val(),
        productStatus = $(".product-status").val();

    if (
        productName === "" ||
        productPrice === "" ||
        productLeftCount === "" ||
        productCollection === "" ||
        productDesc === "" ||
        productStatus === ""
    ) {
        alert("Please insert all details!");
        return false;
    } else return true;
};

function previewFileHendler(input, order) {
    const imgClassName = input.className;
    console.log("input:", input)

    const file = $(`.${imgClassName}`).get(0).files[0];
    const fileType = file["type"];
    const validImageType = ["image/jpg", "image/jpeg", 'image/png'];

    if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg and png!");
    } else {
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}

function logoutConfirm(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Log out?',
        text: "You'll be signed out from your admin panel.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#0d9488', // teal-600
        cancelButtonColor: '#6b7280',  // gray-500
        confirmButtonText: 'Log me out',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/admin/logout";
        }
    });
}
