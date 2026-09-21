BD ROBLOX SHOP PRO

Các trang đã thêm:
- account.html: tài khoản + VNĐ + Kim cương + Robux
- lich-su.html: biến động số dư, random acc, nạp thẻ, đơn dịch vụ
- mua-acc.html: mua/random acc
- dat-don.html: đặt dịch vụ
- nap-tien.html: nạp thẻ
- vong-quay.html: vòng quay khuyến mãi miễn phí 1 lượt/24h
- rut-kim-cuong.html: yêu cầu rút Kim cương
- rut-robux.html: yêu cầu rút Robux
- supabase_upgrade.sql: schema/RPC cho Kim cương, Robux, rút và vòng quay

Cài đặt:
1. Upload toàn bộ thư mục lên GitHub Pages/hosting.
2. Chạy supabase_upgrade.sql trong Supabase SQL Editor.
3. Giữ index.html là trang chính.
4. Nếu dùng schema cũ, các RPC hiện tại của shop vẫn được gọi như file gốc.
5. Admin cần thêm giao diện xử lý bd_shop_asset_withdrawals nếu muốn duyệt rút trực tiếp trên web.

Lưu ý bảo mật:
- Không dùng localStorage để làm số dư thật.
- Kim cương/Robux và kết quả vòng quay được thay đổi ở server RPC.
- Vòng quay mẫu là khuyến mãi miễn phí, không phải cơ chế trả tiền để quay.
