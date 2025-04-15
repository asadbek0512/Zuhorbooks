console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", function (e) {
        const id = e.target.id,
            memberStatus = $(`#${id}.member-status`).val();

        axios
            .post("/admin/user/edit", {
                _id: id,
                memberStatus: memberStatus,
                
            })
            .then((response) => {
                console.log("response:", response);
                const result = response.data;

                if (result.data) {
                    $(".member-status").blur();
                } else alert("User update failed!");
            })
            .catch((err) => {
                console.log(err);
                alert("User update failed!");
            });
    });
});


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