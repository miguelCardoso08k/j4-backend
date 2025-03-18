/*
  Warnings:

  - Added the required column `number` to the `Load` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `PurchaseOrder` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Load" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Load" ("createdAt", "id", "status", "updatedAt") SELECT "createdAt", "id", "status", "updatedAt" FROM "Load";
DROP TABLE "Load";
ALTER TABLE "new_Load" RENAME TO "Load";
CREATE TABLE "new_LoadOrder" (
    "loadId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,

    PRIMARY KEY ("loadId", "orderId"),
    CONSTRAINT "LoadOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LoadOrder_loadId_fkey" FOREIGN KEY ("loadId") REFERENCES "Load" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_LoadOrder" ("loadId", "orderId") SELECT "loadId", "orderId" FROM "LoadOrder";
DROP TABLE "LoadOrder";
ALTER TABLE "new_LoadOrder" RENAME TO "LoadOrder";
CREATE TABLE "new_OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "totalAmount" REAL NOT NULL,
    "discountValue" REAL,
    "dicountPercentage" REAL,
    CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("dicountPercentage", "discountValue", "id", "orderId", "price", "productId", "quantity") SELECT "dicountPercentage", "discountValue", "id", "orderId", "price", "productId", "quantity" FROM "OrderItem";
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";
CREATE TABLE "new_Payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Payment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Payment" ("createdAt", "customerId", "id", "paymentMethod") SELECT "createdAt", "customerId", "id", "paymentMethod" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
CREATE TABLE "new_PurchaseOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_PurchaseOrder" ("createdAt", "id") SELECT "createdAt", "id" FROM "PurchaseOrder";
DROP TABLE "PurchaseOrder";
ALTER TABLE "new_PurchaseOrder" RENAME TO "PurchaseOrder";
CREATE TABLE "new_Record" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "balance" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Record_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Record" ("balance", "customerId", "id", "updatedAt") SELECT "balance", "customerId", "id", "updatedAt" FROM "Record";
DROP TABLE "Record";
ALTER TABLE "new_Record" RENAME TO "Record";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
