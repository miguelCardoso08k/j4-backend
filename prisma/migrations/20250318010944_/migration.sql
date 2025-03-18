/*
  Warnings:

  - Added the required column `quantity` to the `StockMovements` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StockMovements" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StockMovements_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_StockMovements" ("id", "productId", "type") SELECT "id", "productId", "type" FROM "StockMovements";
DROP TABLE "StockMovements";
ALTER TABLE "new_StockMovements" RENAME TO "StockMovements";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
