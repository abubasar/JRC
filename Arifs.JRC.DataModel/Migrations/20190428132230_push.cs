using Microsoft.EntityFrameworkCore.Migrations;

namespace Arifs.JRC.DataModel.Migrations
{
    public partial class push : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PushSubscriptionModels",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    EndPoint = table.Column<string>(nullable: true),
                    Auth = table.Column<string>(nullable: true),
                    P256Dh = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PushSubscriptionModels", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PushSubscriptionModels");
        }
    }
}
