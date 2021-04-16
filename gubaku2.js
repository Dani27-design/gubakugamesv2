const loadPage = async () => {
    let again = true;

    const start = await Swal.fire({
        title: 'Selamat Datang di Gubaku Games V2',
        text: 'Sekarang anda dapat bermain bersama teman',
        icon: 'success',
        confirmButtonText: 'Main'
    });

    if (start) {
        while (again) {
            for (let i = 1; i > 0; i--) {

                let {value: satu} = await Swal.fire({
                    title: 'Giliran Pertama<br>Masukkan Nama',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Simpan',
                    cancelButtonText: 'Batal',
                    customClass: {
                        title: 'styleBaru'
                    }
                });
                let {value: dua} = await Swal.fire({
                    title: 'Giliran Kedua<br>Masukkan Nama',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Simpan',
                    cancelButtonText: 'Batal',
                    customClass: {
                        title: 'styleBaru'
                    }
                });


                if (satu == null || dua == null) {
                    await Swal.fire(
                        `Maaf Anda Harus Mengisikan Nama`,
                        ``,
                        'error'
                    );
                    again = false;
                    i = 0;
                } else {
                    await Swal.fire({
                        title: `Pertandingan Dimulai`,
                        text: `Selamat Bermain`,
                        icon: 'success',
                        confirmButtonText: 'Lanjut'
                    });

                    await Swal.fire(`Sekarang Giliran ${satu}`);
                    let giliranSatu = await Swal.fire({
                        title: 'Pilih Senjata',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `gunting`,
                        denyButtonText: `batu`,
                        cancelButtonText: `kertas`
                      })
                      if (giliranSatu.isConfirmed) {
                        giliranSatu = 'gunting';
                      } else if (giliranSatu.isDenied) {
                        giliranSatu = 'batu';
                      } else {
                        giliranSatu = 'kertas';
                      }

                    await Swal.fire(`Sekarang Giliran ${dua}`);
                    let giliranDua = await Swal.fire({
                        title: 'Pilih Senjata',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `gunting`,
                        denyButtonText: `batu`,
                        cancelButtonText: `kertas`
                      })
                      
                      if (giliranDua.isConfirmed) {
                        giliranDua = 'gunting';
                      } else if (giliranDua.isDenied) {
                        giliranDua = 'batu';
                      } else {
                        giliranDua = 'kertas';
                      }
                    
                    let result = '';
                    if (giliranSatu == giliranDua) {
                        result = 'DRAW!';
                    } else if (giliranSatu == 'gunting') {
                        result = (giliranDua == 'batu') ? 'p2' : 'p1';
                    } else if (giliranSatu == 'batu') {
                        result = (giliranDua == 'kertas') ? 'p2' : 'p1';
                    } else if (giliranSatu == 'kertas') {
                        result = (giliranDua == 'gunting') ? 'p2' : 'p1';
                    } else {
                        result = 'Pemain melakukan kesalahan';
                    }

                    if (result == 'p2') {
                        await Swal.fire(
                            `Selamat ${dua}`,
                            `Anda Menang`,
                            'success'
                          );
                    } else if (result == 'p1') {
                        await Swal.fire(
                            `Selamat ${satu}`,
                            `Anda Menang`,
                            'success'
                          );
                    } else if (result == 'DRAW!') {
                        await Swal.fire('Yah hasil masih Seri<br>Silahkan main lagi');
                    } else {
                        await Swal.fire('Maaf Hasil tidak sah');
                        i = 0;
                    }
                }
            }
            const againConfirm = await Swal.fire({
                title: 'Ingin Bermain Lagi?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Main Lagi',
                cancelButtonText: 'Tidak'
              })

              if (againConfirm.isConfirmed) {
                  again = true;
              } else {
                  again = false;
              }
        }

        await Swal.fire('Terima Kasih Telah Bermain');
    }
}

loadPage();