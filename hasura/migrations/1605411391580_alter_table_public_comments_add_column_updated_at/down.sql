DROP TRIGGER IF EXISTS "set_public_comments_updated_at" ON "public"."comments";
ALTER TABLE "public"."comments" DROP COLUMN "updated_at";
