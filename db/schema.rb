# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171111183706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignment_chores", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "chore_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chore_id"], name: "index_assignment_chores_on_chore_id"
    t.index ["user_id"], name: "index_assignment_chores_on_user_id"
  end

  create_table "chores", force: :cascade do |t|
    t.string "name", null: false
    t.integer "duration"
    t.boolean "status", default: false
    t.date "date", null: false
    t.bigint "household_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["household_id"], name: "index_chores_on_household_id"
  end

  create_table "household_users", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "household_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["household_id"], name: "index_household_users_on_household_id"
    t.index ["user_id"], name: "index_household_users_on_user_id"
  end

  create_table "households", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "assignment_chores", "chores"
  add_foreign_key "assignment_chores", "users"
  add_foreign_key "chores", "households"
  add_foreign_key "household_users", "households"
  add_foreign_key "household_users", "users"
end
